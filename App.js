import React from 'react';
import { StatusBar } from 'react-native'; // Import StatusBar
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaProvider and SafeAreaView
import { store } from './store/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';

const Stack = createNativeStackNavigator();

// Create an HttpLink
const httpLink = new HttpLink({
  uri: 'https://www.taptocontact.com/api/graphql',
});

// Create a middleware link to add headers
const authLink = new ApolloLink((operation, forward) => {
  // Add any custom headers
  operation.setContext({
    headers: {
      Authorization: `Bearer 7`, // Replace with your actual token
      // Add any other custom headers if needed
    },
  });

  return forward(operation);
});

// Combine the links
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LogInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </ApolloProvider>
  );
}
