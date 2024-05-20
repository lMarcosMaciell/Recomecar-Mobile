import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'

export default function Header(){
    return(
        <view style={StyleSheet.container}>
            <text>Header do app</text>
        </view>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#8000ff'
    }
})