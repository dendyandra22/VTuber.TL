import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreen } from "./stackNavigator";
import ProfileScreen from "../ProfileScreen/profileScreen";
import React from 'react';

const DrawerScreen = () =>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}
        >                   
           <Drawer.Screen name="Home" component={StackScreen} />     
           <Drawer.Screen name="Profile" component={ProfileScreen} />     
           
        </Drawer.Navigator>
    );
}

export {DrawerScreen};