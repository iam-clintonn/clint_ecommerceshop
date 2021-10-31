import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ({navigation}) => {

    const handleLogin = () => {
        navigation.navigate('Home');

    };


    return (
        <SafeAreaView style={{backgroundColor:"#ADD8E6", flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{marginBottom: 30, fontSize: 30}}>Welcome to Grocify</Text>
            <Image source={{uri: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'}}
                style={{width: 150, height: 130, borderRadius: 60}} />

            <TextInput style={{backgroundColor: "#fff", padding: 10, borderRadius: 5, margin: 12, color: "grey", width: "60%"}} placeholder="Enter Username"/>
            <TextInput style={{backgroundColor: "#fff", padding: 10, borderRadius: 5, margin: 12, color: "grey", width: "60%"}} placeholder="Enter Password" secureTextEntry/>
            {/* secureTextEntry for hiding passwords characters when entered into placeholder */}
            

            <TouchableOpacity style={{backgroundColor: "#2e6", width: "40%", justifyContent: "center", margin: 9 , alignItems: "center", padding: 9}} onPress = {handleLogin}><Text style={{color: '#fff', fontSize: 18}}>Login</Text></TouchableOpacity>
        </SafeAreaView>
    )

}

export default Login

const styles = StyleSheet.create({})

