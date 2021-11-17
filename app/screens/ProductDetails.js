import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = ({ route, navigation }) => {
  const { foodId, label, category, image, nutrients } = route.params;

  //getting nutrients values]
  // const [ENERC_KCAL, PROCNT, FAT, CHOCDF, FIBTG] = nutrients;

  const roundNumber = (number) => {
    return Math.floor(number);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 30 }}>{label}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.nutrientContainer}>
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>
              Calories: {roundNumber(nutrients.ENERC_KCAL)}
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 18 }}>
              Protein : {roundNumber(nutrients.PROCNT)}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>
              Fat : {roundNumber(nutrients.FAT)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>
              Cabohydrate: {roundNumber(nutrients.CHOCDF)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View
          style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            GHC 20
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexBasis: "10%",
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: { flexBasis: "50%", height: "100%", width: "100%" },
  image: { width: "100%", height: "100%" },
  nutrientContainer: { flexBasis: "20%" },
  buttonsContainer: { flex: 1, flexDirection: "row" },
});

export default ProductDetails;
