import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Product = ({ title, image, price, switchPage }) => {
  return (
    <TouchableOpacity onPress={switchPage}>
      <Text style={{ backgroundColor: "white", flex: 1 }}>{title}</Text>
      <Image
        style={{
          width: 180,
          height: 160,
          marginBottom: 20,
          marginTop: 20,
          borderRadius: 10,
        }}
        source={{ uri: image }}
      />
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({});
