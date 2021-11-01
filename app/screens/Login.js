import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ({navigation}) => {

    const handleLogin = () => {
        navigation.navigate('Home');

    };


    return (
        <SafeAreaView style={{backgroundColor:"#ADD8E6", flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{marginBottom: 10, fontSize: 30, fontStyle: 'italic'}}>Welcome to Grocify</Text>
            <Text style={{marginBottom: 10, fontSize: 30, fontStyle: 'italic'}}></Text>
            <Image source={{uri: 'https://images.unsplash.com/photo-1553531889-56cc480ac5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}}
                style={{width: 170, height: 170, borderRadius: 10, transform:[{ rotate: '30deg'}] }} />

            <TextInput style={{backgroundColor: "#fff", padding: 10, borderRadius: 5, margin: 12, color: "grey", width: "60%"}} placeholder="Enter Username"/>
            <TextInput style={{backgroundColor: "#fff", padding: 10, borderRadius: 5, margin: 12, color: "grey", width: "60%"}} placeholder="Enter Password" secureTextEntry/>
            {/* secureTextEntry for hiding passwords characters when entered into placeholder */}
            

            <TouchableOpacity style={{backgroundColor: "#2e6", width: "40%", justifyContent: "center", margin: 9 , alignItems: "center", padding: 9}} onPress = {handleLogin}><Text style={{color: '#fff', fontSize: 18}}>Login</Text></TouchableOpacity>
        </SafeAreaView>
    )

}

export default Login

const styles = StyleSheet.create({})

