import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface CardProps {
  name: string,
  image: string,
}

const UserCard: React.FC<CardProps> = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 10}}>
        <Text>{name}</Text>
      </View>
      <View>
        <Image source={{uri: image}} style={styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 2,
    width: 300,
    height: 50,
    marginBottom: 10,
  },
  image: {
    width: 46,
    height: 46,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
});

export default UserCard