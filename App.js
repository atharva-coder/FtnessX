import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashBoardScreen from "./screens/DashBoardScreen";





import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashBoardScreen: DashBoardScreen
 
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <NavigationContainer>
    <AppNavigator />
      
      
    </NavigationContainer>

   

  );
}
