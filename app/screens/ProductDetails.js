import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = ({ route, navigation }) => {
  const { title, price, image } = route.params;

  return (
    <SafeAreaView>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;
