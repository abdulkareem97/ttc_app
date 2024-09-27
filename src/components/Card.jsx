import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const Card = ({ imageSource, name,handlePress,item }) => {

    // const handlePress = () => {
    //     Alert.alert(`You pressed on ${name}`);
    //   };

    return (
        <TouchableOpacity 
        onPress={handlePress.bind(this,item)} 
        className="w-[45%] flex flex-col items-center p-4 m-2 bg-white rounded-lg shadow-md"
      >
        <Image
          source={imageSource} 
          className="w-24 h-24 rounded-lg mb-2" 
          resizeMode="cover" 
        />
        <Text className="text-lg font-semibold text-center">{name}</Text>
      </TouchableOpacity>
    )

}

export default Card
