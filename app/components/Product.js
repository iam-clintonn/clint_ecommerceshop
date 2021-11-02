import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Product = ({title, image, price}) => {
    return (
        <View>
            <Text style={{backgroundColor:"white", flex:1}}> {title,image} </Text>
            <Image style=
            {{width:80,height:70, marginBottom:20, marginTop:20}} source={{uri:image}}/>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})
