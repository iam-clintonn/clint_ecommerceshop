import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import { Octicons, Ionicons } from "@expo/vector-icons";
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
      <View style={styles.firstContainer}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Search Groceries" />
        <TouchableOpacity>
          <Octicons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.secondContainer}>
        <Text style={{ fontSize: 30, letterSpacing: 2 }}>Groceries</Text>
      </View>
      <View style={styles.thirdContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Fruits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Vegetables</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Others</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewer}></ScrollView>
      <View style={styles.bottomContainer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#e8f4f8",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 200,
    borderRadius: 5,
  },
  firstContainer: {
    flexBasis: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  secondContainer: {
    flexBasis: "5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  thirdContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tab: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e8f4f8",
  },
  tabText: {
    fontSize: 18,
  },
  scrollViewer: {
    flexBasis: "50%",
    backgroundColor: "red",
  },
  bottomContainer: {
    flex: 1,
  },
});

export default Home;
