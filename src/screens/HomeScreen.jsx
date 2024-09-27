import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, FlatList, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularProfileScreen from './PopularProfileScreen';
import OtherProfileScreen from './OtherProfileScreen';

const Stack = createNativeStackNavigator();
const HomeScreen = () => {
   return(
<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Cards" component={PopularProfileScreen} />
              <Stack.Screen name="OtherProfile" component={OtherProfileScreen} />
            </Stack.Navigator>
   )
};

export default HomeScreen;
