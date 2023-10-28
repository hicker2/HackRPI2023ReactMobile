import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Screens/Login";
import Messages from "./Screens/Messaages";
import Profile from "./Screens/Profile";
import { FIREBASE_AUTH } from "./firebase/firebase_config";

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideStackScreen() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Profile" component={Profile} />
      <InsideStack.Screen name="Messages" component={Messages} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            name="LoggedIn"
            component={InsideStackScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
