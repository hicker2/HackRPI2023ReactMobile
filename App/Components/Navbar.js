import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

function Navbar() {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/Screens/CounterScreen">
        <Text>Counter</Text>
      </Link>
      <Link to="/Screens/Textfield">
        <Text>About</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "lightblue",
  },
});
