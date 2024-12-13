import React from "react";

import ChatPage from './components/ChatPage'; 
import HomePage from './components/HomePage'; 
import SettingPage from './components/SeetingPage'; 


import { NavigationContainer } from '@react-navigation/native';  
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Stack obj - manage nav in React Native. 
const Stack = createNativeStackNavigator();  

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        {/** add more pages here as Stack.  */}

      </Stack.Navigator>
    </NavigationContainer>
  ); 

}

