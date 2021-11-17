import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View>
        <Text style={{ justifyContent: "center", alignItems: "center" }}>
          Cart Page
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
