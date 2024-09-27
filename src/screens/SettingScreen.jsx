import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { CommonActions } from '@react-navigation/native';
const SettingScreen = ({navigation}) => {
    const logOutGoogle = async () => {
        // console.log('here')
        try {
          console.log('Signing out...');
          await GoogleSignin.revokeAccess();
          
          await GoogleSignin.signOut(); // Sign out the user
          // setUserInfo(null); r// Clear user info from state
          
          console.log('User signed out successfully');
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            }))
        } catch (error) {
          console.error('Error during Google Sign-Out:', error);
        }

      };

    return (
        <View className="flex-1 items-center justify-center bg-gray-100 p-4">
            {/* Title */}
            <Text className="text-2xl font-bold text-gray-800 mb-6">
                Settings
            </Text>

            {/* Logout Button */}
            <TouchableOpacity
                onPress={logOutGoogle}
                className="bg-blue-600 py-3 px-6 rounded-full shadow-lg hover:bg-blue-700"
            >
                <Text className="text-white text-lg font-semibold">
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingScreen;
