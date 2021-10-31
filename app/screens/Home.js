import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'



const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#ADD8E6', flex:1, alignItems:'center'}}>
            <Text style={{backgroundColor:'#fff', fontSize: 25, padding: 10, margin:30}}> Home Page </Text>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
