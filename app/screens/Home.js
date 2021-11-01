import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'



const Home = ({navigation}) => {

const handleHome = () =>{
    navigation.navigate('ProductDetails');
}

    return (
        <SafeAreaView style={{backgroundColor: '#ADD8E6', flex:1, alignItems:'center'}}>
            <Text style={{backgroundColor:'#fff', fontSize: 25, padding: 10, margin:30}}> Home Page </Text>
            <TouchableOpacity style={{backgroundColor:'#fff', fontSize:15, padding:6, margin:20, width: "20%", justifyContent:'center', alignItems: 'center' }}><Text> Fruit </Text></TouchableOpacity>
            <TouchableOpacity><Text style={{backgroundColor:'#fff', fontSize:15, padding:6, margin:20 }}> Vegetables </Text></TouchableOpacity>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
