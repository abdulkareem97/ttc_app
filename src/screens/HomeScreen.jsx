import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const HomeScreen = ()=> {

    const user = useSelector((state) => state.counter.user)

    return (
      <View>
        <Text> textInComponent {user.email} </Text>
      </View>
    )
  
}

export default HomeScreen
