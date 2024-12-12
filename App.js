import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  ImageBackground, // to load img as background : replace of background = url() in css. 
} from "react-native";
// import { Image } from "react-native-web";

export default function App() {
  // State for storing messages and the input text
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  // Function to handle sending a message
  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, inputText]);
      setInputText("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          {/* Message Display Area */}
          <ScrollView style={styles.messagesContainer}>
            <View style={styles.header}>
            <Text style={{ fontSize : 20, fontWeight: "bold" , color: "black", 
                           backgroundColor: "#FF8C00", textAlign: "center" ,
                           padding: 10, borderRadius : 5, 
            }}>
              Caxy SnapChat
            </Text>
            </View>

          {/* Logo at the top-center */}
          <View style={styles.logoContainer}>
          <Image
          source={require("./assets/lfa_logo.png")} // Update the path to your logo image
          style={styles.logo}
          resizeMode="contain"
          justifyContent = "center"

           />
          </View>

            {messages.map((message, index) => (
              <View
                key={index}
                style={[
                  styles.messageBubble,
                  index % 2 === 0
                    ? styles.userMessage
                    : styles.receiverMessage,
                ]}
              >
                <Text style={styles.messageText}>{message}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Input Area */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              value={inputText}
              onChangeText={(text) => setInputText(text)}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    justifyContent :"center", 
    backgroundColor : "#F3EDC3" // light orange color 
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 150, // Adjust the width to fit the logo
    height: 150, // Adjust the height to fit the logo
  },

  header : { 
    backgroundColor: "#FFD180",
  }, 

  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  messagesContainer: {
    marginTop : 50,
    marginLeft : 10, 
    marginRight : 10, 
    flex: 1,
    marginBottom: 10,
    
    
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50",
  },
  receiverMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2196F3",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
