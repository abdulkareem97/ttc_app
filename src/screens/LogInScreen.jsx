import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/counterSlice';
const LogInScreen = ({ navigation }) => {

  // const [printed,setPrinted] = useState(true)
  const user = useSelector((state) => state.counter.user);
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'SignUp' }],
        }))
    }
  }, [user])

  useEffect(() => {
    // Configure Google Signin
    GoogleSignin.configure({
      webClientId: '897490709596-ek9mprv6bnj24m5b223s0i1cd7g7btml.apps.googleusercontent.com', // From Firebase Console
      offlineAccess: false,
    });
  }, []);

  // useEffect(()=>{
  //   console.log(printed)
  // },[printed])

  const logingoogle = async () => {
    // const auth = getAuth();
    try {
      const data = await GoogleSignin.signIn();
      // console.log('Sign-in successful, ID Token:', data.data);
      const author = data.data.user
      dispatch(loginUser(author))
      // cons
      // navigation.navigate('SignUp')

    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  const logOutGoogle = async () => {
    console.log('here')
    try {
      console.log('Signing out...');
      await GoogleSignin.revokeAccess();

      await GoogleSignin.signOut(); // Sign out the user
      // setUserInfo(null); r// Clear user info from state

      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error during Google Sign-Out:', error);
    }
  };
  return (
    <View className="flex-1 items-center justify-center px-6 bg-white ">
      {/* App Logo */}
      <Image

        source={require('../img/logo.png')}
        className="w-32 h-32 mb-6"
      />

      {/* Page Heading */}
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to TapToContact
      </Text>

      {/* Subheading */}
      <Text className="text-base text-gray-500 mb-8">
        Please sign in to continue
      </Text>

      {/* Google Sign-In Button */}
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={logingoogle}


      />

    </View>
  )
}

export default LogInScreen
