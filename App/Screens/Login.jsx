import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebase_config";
import { Button, KeyboardAvoidingView, StyleSheet, View, TextInput, ActivityIndicator } from "react-native";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert('Sign in failed');
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> :
      <>
      <Button title="Login" onPress={signIn} /> 
      <Button title="Sign Up" onPress={signUp} /> 
      </> }
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 20,
  },
});

export default Login;
