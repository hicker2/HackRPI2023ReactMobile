import React, { useState } from "react";
import FIREBASE_AUTH from "../config/firebase";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  cosnt[(loading, setLoading)] = useState(false);

  const auth = FIREBASE_AUTH;

  return (
    <View style={styles.container}>
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
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
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

export default LoginScreen;
