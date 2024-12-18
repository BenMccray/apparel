import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebaseConfig.web"; // Adjust as needed
import { TokenResponse } from "expo-auth-session";

export const useGoogleSignIn = () => {
  // Configure Google Auth with client IDs
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "694356706221-0p7hin24bnlcujj16l76kug47fjcm4nu.apps.googleusercontent.com",
    iosClientId: "694356706221-3tqvt3522643goke86k3u7bqq0q1s671.apps.googleusercontent.com",
    androidClientId: "694356706221-354ues611qepskfdcn0fqos8668quevn.apps.googleusercontent.com",
    webClientId: "694356706221-0p7hin24bnlcujj16l76kug47fjcm4nu.apps.googleusercontent.com",
    redirectUri: "http://localhost:8081"
  });

  const handleResponse = async () => {
    await promptAsync();
    if (response?.type === "success" && response.authentication) {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);

      try {
        const result = await signInWithCredential(auth, credential);
        return result.user;
      } catch (error) {
        console.error("Firebase Auth Error:", error);
        throw error;
      }
    }
  };

  return { request, promptAsync, handleResponse };
};
