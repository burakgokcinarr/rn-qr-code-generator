import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ColorView({ color = 'black', index, setColor = null }) {
  return (
    <TouchableOpacity onPress={() => setColor(color)}>
        <View key={index} style={[styles.container, { backgroundColor: color, borderWidth: 3 }]}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    }
})