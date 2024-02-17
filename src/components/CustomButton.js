import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { ORANGE, BLACK } from '../theme/AppTheme'

export default function CustomButton({ onPress = null }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.title}>Generate QR</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ORANGE
    },
    title: {
        color: BLACK,
        fontSize: 17,
        textAlign: 'center'
    }
})