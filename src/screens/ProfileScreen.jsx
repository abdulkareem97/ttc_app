import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { gql, useLazyQuery, useQuery } from '@apollo/client';import { useSelector } from 'react-redux';
;
const QUERY = gql`
  query FindProductQuery($email: String!) {
    getUserId(email: $email) {
      id
      name
      email
      ClientInfo{
        id
        client
      }
     
    }
  }
`;
const QUERY2 = gql`
  query FindPortfolioQuery($id: String!) {
    clientInfo:clientInfoClientId(client: $id) {
      id
      client
      details
      created_at
      updated_at
      extra
      userId
    }
  }
`;

const ProfileScreen = () => {
    const user = useSelector((state) => state.counter.user)
    // const info = clientInfo.details
    const [userDetail,setUserDetail] = useState({})
    const { loading, error, data } = useQuery(QUERY, {
        variables: { email:user.email }, // Pass the client ID as a variable
      });

      const [findPortfolio, { loading:l1, error:e1, data:d1 }] = useLazyQuery(QUERY2);
      useEffect(()=>{
        if(d1){
            console.log(d1.clientInfo.details)
            setUserDetail({...d1.clientInfo.details,loaded:true})

        }
      },[d1])

    useEffect(()=>{
      if (data) {
        console.log('hello',data)
        const clientId = data.getUserId.ClientInfo[0].client
        console.log(clientId)
        findPortfolio({ variables: { id:clientId } });

      }
      if(error){
        console.log('error',error)
      }
    },[data,error,loading])

    return (
      <View>

      {
        userDetail?.loaded ? <Text> got user detail </Text> :
        <Text> textInComponent </Text>
      }
        {/* <Text> textInComponent </Text> */}
      </View>
    )
}

export default ProfileScreen
