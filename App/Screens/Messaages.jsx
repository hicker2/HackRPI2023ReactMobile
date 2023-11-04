import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { FIREBASE_DB, FIREBASE_AUTH } from '../firebase/firebase_config';
import { collection, query, onSnapshot, setDoc, doc, serverTimestamp } from 'firebase/firestore';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const scrollview = useRef();
  const user = FIREBASE_AUTH.currentUser;
  const db = FIREBASE_DB;

  useEffect(() => {
    const q = query(collection(db, 'chats'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const messagesFirestore = querySnapshot.docs
        .map((doc) => {
          const firebaseData = doc.data();
          const data = {
            text: doc.text,
        createdAt: doc.createdAt,
        _id: doc._id,
        email: doc.email,
            
            ...firebaseData
          };
          return data;
        })
        .sort((a, b) => a.createdAt - b.createdAt);
      setMessages(messagesFirestore);
    } );
    return () => unsub();
  }, [db]); 

  const onSend = async () => {
    inputText.trim()
    const newDocRef = doc(collection(db, 'chats'));
      await setDoc(newDocRef, {
        text: inputText,
        createdAt: serverTimestamp(),
        _id: user.uid,
        email: user.email,
      });
      setInputText('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
    <View style={styles.container}>
      {/* Display Messages */}
      <ScrollView 
      ref={scrollview}
      onContentSizeChange={() => scrollview.current.scrollToEnd({ animated: true })}
      style={{ flex: 1 }}>
        {messages.map((message) => (
          <Text
          style={
            message._id === user.uid ? styles.personalMessage : styles.otherMessage
          }
        >
          {message.text}
        </Text>
        ))}
      </ScrollView>

      {/* Input Box */}
      <View style={styles.container}>
        <TextInput
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          style={styles.input}
        />
        <Button title="Send" onPress={onSend} />
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  keyboard : {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
  },
  personalMessage : {
    alignSelf: 'flex-end',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  otherMessage : {
    alignSelf: 'flex-start',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});