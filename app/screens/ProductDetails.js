import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = ({ route, navigation }) => {
  const { foodId, label, category, image, nutrients } = route.params;

  //getting nutrients values]
  // const [ENERC_KCAL, PROCNT, FAT, CHOCDF, FIBTG] = nutrients;

  return (
    <SafeAreaView>
      <Text>{label}</Text>
      <Text>{nutrients.ENERC_KCAL}</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;
