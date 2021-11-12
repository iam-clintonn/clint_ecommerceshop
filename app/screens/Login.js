import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ADD8E5",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 30, fontSize: 30, fontStyle: "italic" }}>
        Welcome to Grocify
      </Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1533413710577-c1b62c5fc55b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        }}
        style={{
          width: 180,
          height: 170,
          borderRadius: 10,
          marginBottom: 15,
          transform: [{ rotate: "20deg" }],
        }}
      />

      <TextInput
        style={{
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 5,
          margin: 12,
          color: "grey",
          width: "60%",
        }}
        placeholder="Enter Username"
      />
      <TextInput
        style={{
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 5,
          margin: 12,
          color: "grey",
          width: "60%",
        }}
        placeholder="Enter Password"
        secureTextEntry
      />
      {/* secureTextEntry for hiding passwords characters when entered into placeholder */}

      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          width: "40%",
          justifyContent: "center",
          margin: 9,
          alignItems: "center",
          padding: 9,
          color: "maroon",
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 12, textDecorationLine: "underline" }}>
          {" "}
          Don't Have An Account ? Signup{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
