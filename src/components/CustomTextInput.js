import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function CustomTextInput({ onChangeText = null, defaultValue = 'www.google.com'  }) {

  return (
      <TextInput
        placeholder='QRCode Generate Text...'
        style={styles.input}
        cursorColor='#fff'
        autoCapitalize='none'
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '85%',
    height: 50,
    borderWidth: 0.6,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    fontSize: 17
  }
})