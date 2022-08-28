
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./src/screens/Home";
import Libary from "./src/screens/Libary";
import Premium from "./src/screens/Premium";
import Search from "./src/screens/Search";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";
import TabNavigation from "./src/Navigation/TabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import { getData } from "./src/Utils/Storage";
import { Provider , useSelector } from "react-redux";
import { store } from "./src/redux";
import { userSelector } from "./src/redux/slices/user";


const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const user = await getData("@access_token");
    console.log(user)
    if (!user) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <StatusBar  backgroundColor={theme.colors.darkLight} style="dark"/> */}
        <NavigationContainer>
          <Stack.Navigator>
            {!isAuthenticated ? (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
              />
            ) : (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={TabNavigation}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      </Provider>
  );
}