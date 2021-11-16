import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Product = ({ label, image, category, switchPage }) => {
  return (
    <TouchableOpacity onPress={switchPage}>
      <Text style={{ backgroundColor: "white", flex: 1 }}>{label}</Text>
      <Image
        style={{
          width: 360,
          height: 250,
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 20,
        }}
        source={{ uri: image }}
      />
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({});
