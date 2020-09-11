import { StyleSheet, Text, View } from 'react-native';
// navigation
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeDrawer,PostDrawer, ProfileDrawer } from "./screens/HomeScreen/components/menuDrawer";
import LoginScreen from './screens/LoginScreen/loginScreen';
import ProfileScreen from "./screens/ProfileScreen/profileScreen";
import SignInScreen from "./screens/SignInScreen/signInScreen";
import InitFirebase from "./screens/LoginScreen/components/firebase";
import {StackScreen } from './screens/Navigators/stackNavigator'
import {DrawerScreen } from './screens/Navigators/drawerNavigation'
import Post from './screens/PostScreen/postDetails'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
    {/* <Drawer.Navigator initialRouteName="Home" screenOption={{headerShown: false}}>
      <Drawer.Screen name="Profile" component={ProfileDrawer} />
      <Drawer.Screen name="Home" component={StackScreen} />
      <Drawer.Screen name="Post" component={Post} />
      <Drawer.Screen name="PostDrawer" component={PostDrawer} />
      <Drawer.Screen name="HomeDrawer" component={HomeDrawer} />
    </Drawer.Navigator> */}
    <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false
            }}
        >        
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />  
            <Stack.Screen name="DrawerNav" component={DrawerScreen} />  
        </Stack.Navigator>
      
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
