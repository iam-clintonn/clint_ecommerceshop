import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Login = ({navigation}) => {

    const handleLogin = () => {
        navigation.navigate('Home');

    };


    return (
        <SafeAreaView style={{backgroundColor:"#ADD8E6", flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{marginBottom:40, fontSize: 20}}>Welcome to Clint's Shop</Text>
            <TextInput style={{backgroundColor: "#fff", padding: 10, borderRadius: 5, margin: 12, color: "grey", width: "60%"}} placeholder="Username"/>
            <TextInput style={{backgroundColor: "#fff", padding: 10, borderRadius: 5, margin: 12, color: "grey", width: "60%"}} placeholder="Password" secureTextEntry/>
            {/* secureTextEntry for hiding passwords when entered into placeholder */}


            <TouchableOpacity style={{backgroundColor: "#2e4", width: "60%", justifyContent: "center", alignItems: "center", padding: 10}} onPress = {handleLogin}><Text style={{color: '#fff', fontSize: 18}}>Login</Text></TouchableOpacity>
        </SafeAreaView>
    )

}

export default Login

const styles = StyleSheet.create({})

