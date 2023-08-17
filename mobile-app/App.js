import { StatusBar } from 'expo-status-bar';
import { FlatList,Image, RefreshControl, SafeAreaView, ScrollView,StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './componentsFolder/header';
import Home from './componentsFolder/home'
import OneCountry from './componentsFolder/OneCountry';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function App() {
  return(
   

<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
    <Stack.Screen
     name="Home"
     component={Home}
     options={{title: 'Welcome'}}
     />
 <Stack.Screen name="Profile" component={OneCountry} />
   </Stack.Navigator>
 </NavigationContainer>


   
  )
}

