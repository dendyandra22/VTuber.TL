import Home from "../HomeScreen/home";
import Post from "../PostScreen/postDetails";
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../LoginScreen/loginScreen';
import ProfileScreen from "../ProfileScreen/profileScreen";
import SignInScreen from "../SignInScreen/signInScreen";

const StackScreen = () =>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}
        >        
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Post" component={Post} />             
            <Stack.Screen name="Profile" component={ProfileScreen} />              
        </Stack.Navigator>
    );
}

export {StackScreen};
