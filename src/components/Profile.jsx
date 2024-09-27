import React, { Component, useEffect, useState } from 'react'
import { View, Image, Text, Linking, Pressable, FlatList, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import RenderHTML from 'react-native-render-html';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const Profile = ({ info: userDetail, client }) => {


    // const fadeAnim = new Animated.Value(0);
    // const bounceAnim = new Animated.Value(0.8);

    // useEffect(() => {
    //   // Fade in effect
    //   Animated.timing(fadeAnim, {
    //     toValue: 1,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   }).start();

    //   // Bounce effect
    //   Animated.spring(bounceAnim, {
    //     toValue: 1,
    //     friction: 2,
    //     tension: 50,
    //     useNativeDriver: true,
    //   }).start();
    // }, []);


    const [hitCount, setHitCount] = useState(0)
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchHitCount = async () => {
            try {
                const response = await axios.get(`https://www.taptocontact.com/api/pageHit?pageName=${client}`)
                setHitCount(response.data.hitCount)
                // console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchHitCount()
    }, [client])


    const socialIcon = (platform, url, color, iconName) => {
        return (
            url && (
                <Pressable
                    onPress={() => Linking.openURL(url)}
                    className="m-3 p-3 border-3 rounded-lg"
                >
                    <FontAwesome name={iconName} size={30} color={color} />
                </Pressable>
            )
        );
    };

    const data = [
        { title: 'Full Name:', value: userDetail.name },
        { title: 'Contact:', value: userDetail.contact },
        { title: 'Company Name:', value: userDetail.companyName },
        { title: 'Email:', value: userDetail.email },
        { title: 'Address:', value: userDetail.address },
        { title: 'Pin Code:', value: userDetail.pinCode },
    ].filter(item => item.value);

    console.log(userDetail.profileImage, '\n\n\n\nhello')
    return (

        <View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16 }}>
                <View className="ml-2 mt-3 flex items-center">
                    <View
                    // style={{
                    //     backgroundImage: `url(${userDetail.profileImage ? userDetail.profileImage : logo
                    //         })`,
                    // }}
                    // className="hidden lg:block w-full lg:w-1/3 bg-center"
                    ></View>

                    <View className="w-full text-center">


                        <View className="flex justify-center items-center">
                            <View className='bg-black rounded-md p-2'>
                                <View className='flex-row'>
                                    <Ionicons name={'eye'} size={24} color="gray" />
                                    <Text className="p-1 rounded-lg text-yellow-500">



                                        Views: {hitCount}</Text>
                                </View>
                            </View>
                        </View>

                        <View className='justify-center items-center mt-3'>

                            {imageError ? (

                                <Image
                                    source={require('../img/logo.png')}
                                    className="h-40 w-40"

                                />
                            ) : (
                                <Image
                                    source={{uri:userDetail.profileImage}}
                                    // source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/taptocontact-fa569.appspot.com/o/portfolio%2FEoDCq2K%2FprofileImage.jpg?alt=media&token=e81b682c-1774-4b3f-8f08-855aac6206a8',
                                    // // priority: FastImage.priority.normal,


                                    //  }}
                                    // source={require('../img/logo.png')}



                                    className="h-40 w-40 rounded-full"
                                    // resizeMode={FastImage.resizeMode.contain}
                                    // onError={(error) => console.log('Image load error:', error.nativeEvent.error)} // Set error state if loading fails
                                    onError={()=>setImageError(true)}
                                />
                            )}
                        </View>
                        <View className="flex items-center mt-5">
                            {/* <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: bounceAnim }] }}> */}
                            <Text className="text-[#293439] text-4xl font-semibold">
                                {userDetail.name}
                            </Text>
                            <Text className="text-2xl text-[#546E7A] mt-2">
                                {userDetail.companyName}
                            </Text>
                            <Text className="text-2xl text-[#546E7A] mt-2">
                                {userDetail.designation}
                            </Text>
                            {/* </Animated.View> */}
                        </View>

                        <View className="flex flex-row justify-center mt-5">
                            {socialIcon('facebook', userDetail.facebook, '#3b5998', 'facebook')}
                            {socialIcon('instagram', userDetail.instagram, '#bc2a8d', 'instagram')}
                            {socialIcon('linkedin', userDetail.linkedin, '#0077b5', 'linkedin')}
                            {socialIcon('twitter', userDetail.twitter, '#1da1f2', 'twitter')}
                            {socialIcon('telegram', userDetail.telegram, '#0088cc', 'telegram')}
                            {socialIcon('youtube', userDetail.youtube, '#c4302b', 'youtube')}
                            {socialIcon('contact', `tel:${userDetail.contact}`, '#25d366', 'phone')}
                            {socialIcon('whatsapp', `https://wa.me/${userDetail.contact}`, '#25d366', 'whatsapp')}
                            {socialIcon('mapLink', userDetail.mapLink, '#c4302b', 'map-marker')}
                            {socialIcon('grl', userDetail.grl, '#c4302b', 'google')}
                            {socialIcon('websiteLink', userDetail.websiteLink, '#c4302b', 'globe')}
                        </View>
                    </View>
                </View>

                <View>
                    {/* <View className="mx-4"> */}
                    <Text className='font-bold text-xl'>
                        ABOUT ME
                    </Text>
                    <View >
                        <RenderHTML
                            contentWidth={300}
                            source={{ html: userDetail.about }}
                        // tagsStyles={tagsStyles} // Optional: for custom styles
                        />
                    </View>
                    <View className="p-4 bg-white rounded-lg shadow-md">
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.title}
                            renderItem={({ item }) => (
                                <View className="mb-3 flex-row items-center space-x-5">
                                    <Text className="text-lg font-bold text-gray-800">{item.title}</Text>
                                    <Text className="text-gray-600">{item.value}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>


            </ScrollView>
        </View>
    );

}

export default Profile
