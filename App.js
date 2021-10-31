import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/screens/Login';
import Home from './app/screens/Home';
import ProductDetails from './app/screens/ProductDetails';
import Cart from './app/screens/Cart'; 



export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator initialRoute="login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Productdetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

