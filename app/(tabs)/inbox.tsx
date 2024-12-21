import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  collection,
  where,
  query,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "@/firebaseConfig.web";
import { onAuthStateChanged } from "firebase/auth";

interface Chat {
  id: string;
  userId: string;
  lastMessage: string;
  lastTimestamp: Timestamp;
  userName?: string;
  userImageURL?: string;
}
export default function InboxScreen() {
  const [chats, setChats] = useState<Chat[]>([]);

  const filterChats = () => {
    return;
  };

  useEffect(() => {
    const fetchChats = (user: any) => {
      const unsubscribeFromSnapshot = onSnapshot(
        // query db for chats with the current user's involvement
        query(
          collection(db, "chats"),
          where("userIds", "array-contains", user.uid)
        ),
        (snapshot) => {
          if (snapshot.docChanges().length === 0) {
            // Use cached data if there are no changes
            const cachedChats = localStorage.getItem("cachedChats");
            if (cachedChats) {
              console.log("cache grab");
              setChats(JSON.parse(cachedChats));
            }
            return;
          }
          // each chat document, get the fields from the doc, and set the userId of the chat link
          const chatsData = snapshot.docs.map((chatDoc) => {
            const { userIds, lastMessage, lastTimestamp } = chatDoc.data();
            const userId = (userIds as string[]).filter(
              (item) => item !== user.uid
            )[0];
            return {
              id: chatDoc.id,
              userId,
              lastMessage,
              lastTimestamp,
            };
          });
          setChats(chatsData);
          // Cache chats in local storage
          localStorage.setItem("cachedChats", JSON.stringify(chatsData));
        }
      );
      return () => unsubscribeFromSnapshot(); // Clean up the snapshot listener
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchChats(user); // Fetch from Firestore if no cache or there was a change in data
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.filterMessages} onPress={filterChats}>
          <Ionicons name="funnel-outline" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              style={styles.chatItem}
              href={{
                pathname: "../(auth)/message-chain/[chatId]",
                params: { chatId: item.id },
              }}
            >
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.avatar}
              />
              <View style={styles.chatDetails}>
                <Text style={styles.name}>{item.userId}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
            </Link>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 12,
    alignItems: "center",
  },
  chatItem: {
    display: "flex",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  searchBar: {
    flex: 1,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
  },
  filterMessages: {
    marginHorizontal: "4%",
  },
});
