import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, FlatList, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Profile from '../components/Profile';

const OtherProfileScreen = ({route}) => {

    const { info,client } = route.params; 

    // console.log(client)
    return (
        <View className='flex-1'>
           <Profile info={info} client={client} />
        </View>
    );
};

export default OtherProfileScreen;


// export default OtherProfileScreen
