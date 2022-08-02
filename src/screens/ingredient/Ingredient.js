import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '@components/ingredient/Style'

const Ingredient = () => {
  return (
    <View style={styles.container}>
      <Text>Ingredients</Text>
    </View>
  )
}

export default Ingredient