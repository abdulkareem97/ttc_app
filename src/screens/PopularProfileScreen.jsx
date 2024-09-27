import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, FlatList, TextInput, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { gql, useQuery } from '@apollo/client';


const QUERY = gql`
  query FindClientInfos {
    clientInfos {
      id
      client
      details
    }
  }
`
const PopularProfileScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const user = useSelector((state) => state.counter.user);
    // console.log(user)
    const { loading, error, data:d1 } = useQuery(QUERY);
    const [data,setData] = useState([])
    // let loading = false

    useEffect(()=>{

        if(d1){
        setData(d1.clientInfos)
        // console.log(d1.clientInfos[0].details.name)
        }
    },[d1])

    // const data = [
    //     { id: '1', image: 'https://example.com/image.jpg', name: 'John Doe' },
    //     { id: '2', image: 'https://example.com/image2.jpg', name: 'Jane Smith' },
    //     { id: '3', image: 'https://example.com/image3.jpg', name: 'Alice Johnson' },
    //     { id: '4', image: 'https://example.com/image4.jpg', name: 'Bob Brown' },
    //     // Add more data as needed
    // ];

    // Filter data based on search term
    const filteredData = data.filter(item => 
       item.details?.name && item.details?.profileImage && item.details?.name?.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    const handlePress = (item) => {
        // Alert.alert(`You pressed on ${name}`);
        // console.log(item)
        navigation.navigate('OtherProfile', {info:item.details,client:item.client})

    };

    const renderItem = ({ item }) => (
        <Card
            imageSource={{ uri: item.details.profileImage }}
            name={item.details.name}
            // onPress={() => handlePress(item.details.name)}
            handlePress={handlePress}
            item={item}
        />
    );

    return (
        <View className='flex-1'>
        {loading ?
            <View className='flex-1 justify-center items-center'>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text className='mt-5 text-2xl text-[#000]'>Loading...</Text>
        </View>
         :

        
        <View className='flex-1'>
            <View className='justify-center items-center'>
                <View className='bg-black p-3 mt-3 rounded-lg'>
                    <Text className='text-white'>Some Popular Profiles</Text>
                </View>
            </View>

            {/* Search Input */}
            <TextInput
                className='m-4 p-2 bg-white rounded-md'
                placeholder='Search profiles...'
                value={searchTerm}
                onChangeText={setSearchTerm}
            />

            <View className="flex-1 justify-center items-center bg-gray-100 flex-row">
                <FlatList
                    data={filteredData} // Use filtered data
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2} // Adjust for two columns
                />
            </View>
        </View>

    }
    </View>
    );
};

export default PopularProfileScreen;

