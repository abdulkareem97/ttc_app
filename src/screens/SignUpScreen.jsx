import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeScreen from './HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import SettingScreen from './SettingScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const SignUpScreen = ()=> {
 
    return (
   
              <Tab.Navigator screenOptions={{headerTitleAlign:'center',headerShown:false}}>
            <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Home', // Header title
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} /> // Icon for Home tab
            ),
          }} 
        />
          <Tab.Screen name="Profile" component={ProfileScreen} 
   options={{
            title: 'Profile', // Header title
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} /> // Icon for Setting tab
            ),
          }} 

        />
        <Tab.Screen name="Settings" component={SettingScreen} 
   options={{
            title: 'Setting', // Header title
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} /> // Icon for Setting tab
            ),
          }} 

        />
      
      </Tab.Navigator>
  
    )
  
}

export default SignUpScreen
