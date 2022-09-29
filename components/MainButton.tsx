import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface MainButtonProps { 
  disabled: boolean,
  onPress: () => void,
  text: string,
}

const MainButton: React.FC<MainButtonProps> = ({ disabled, onPress, text }) => {
  return (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={disabled}
      >
        <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
})

export default MainButton