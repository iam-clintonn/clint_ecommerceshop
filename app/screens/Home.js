import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import Product from "../components/Product";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProducts(data.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#ADD8E6", flex: 1, alignItems: "center" }}
    >
      <ScrollView style={{ flex: 1 }}>
        {products &&
          products.map((product) => (
            <Product
              switchPage={() =>
                navigation.navigate("ProductDetails", { ...product })
              }
              title={product.title}
              image={product.image}
              price={product.price}
              key={product.id}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
