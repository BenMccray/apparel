import { db, auth } from "@/firebaseConfig.web";
import { Link, useLocalSearchParams } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import {
  onSnapshot,
  query,
  collection,
  Timestamp,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

interface Message {
  messageId: string;
  senderId: string;
  text: string;
  timestamp: Timestamp;
  isRead: boolean;
}
export default function ChatScreen() {
  const { chatId } = useLocalSearchParams();

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "chats", chatId as string, "messages")),
      (snapshot) => {
        const messageFeed = snapshot.docs.map((msg) => {
          const { senderId, text, timestamp, isRead } = msg.data();
          return {
            messageId: msg.id,
            senderId,
            text,
            timestamp,
            isRead,
          };
        });
        setMessages(messageFeed.sort((a, b) => a.timestamp - b.timestamp));
      }
    );
    return () => unsubscribe();
  }, []);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    const now = Timestamp.now();
    const docRef = await addDoc(
      collection(db, "chats", chatId as string, "messages"),
      {
        text: newMessage,
        senderId: auth.currentUser?.uid as string,
        isRead: false,
        timestamp: now,
      }
    );
    await updateDoc(doc(db, "chats", chatId as string), {
      lastMessage: newMessage,
    });
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          messageId: docRef.id,
          text: newMessage,
          senderId: auth.currentUser?.uid as string,
          timestamp: now,
          isRead: false,
        },
      ]);
      setNewMessage("");
    }
  };

  const closeChat = () => {
    // Handle close chat action (e.g., navigate back)
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link style={styles.closeButtonText} href="/inbox">
          Close
        </Link>
        <Text style={styles.header}>{chatId}</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.messageId}
        renderItem={({ item }) => (
          <View>
            <View
              style={[
                styles.message,
                item.senderId === auth.currentUser?.uid
                  ? styles.currUserMessage
                  : styles.otherUserMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
            <Text style={styles.timestamp}>
              {item.timestamp.toDate().toDateString()}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {},
  closeButtonText: {
    color: "#007bff",
    fontWeight: "bold",
    padding: 10,
  },
  chatContainer: {
    flexGrow: 1,
    padding: 10,
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "80%",
  },
  currUserMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
  },
  otherUserMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#007bff",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  timestamp: {
    backgroundColor: "none",
    color: "gray",
    textAlign: "center",
  },
});
