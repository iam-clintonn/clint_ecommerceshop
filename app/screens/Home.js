import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios' 


const Home = ({navigation}) => {

    const handleHome = () =>{
        navigation.navigate('ProductDetails');
    }

    const [products, setProducts] = useState();

    useEffect(() => {
        axios 
            .get("https://fakestoreapi.com/products")
            .then((data) => setProducts(data.data))
            .catch((err) => alert(err.message))
    }, [])

    return (
        <SafeAreaView style={{backgroundColor: '#ADD8E6', flex:1, alignItems:'center'}}>
            {/* {products && <FlatList data={products} renderItem={(product3) => (<Text key={product.id}>{product.title}</Text>)}/>} */}
            <ScrollView style={{flex: 1}}>
                {products && products.map(product => <Text key={product.id}>{product.title}</Text>)}

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
