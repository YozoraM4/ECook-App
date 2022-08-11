import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
// Style
import styles from './Style';

// Icon
import EasyToUse from '../../../assets/icons/introEasy';

const First = (props) => {
  return (
    <View style={styles.componentContainer}>
        <View style={styles.headBox}>
            <Text style={styles.headline}><Text style={styles.textPink}>Easy</Text> To Use</Text>
            <Text style={styles.subline}>At Recipes, There alot of recipes all over the world.</Text>
            <Text style={styles.subline}>You can saved recipes easy to find.</Text>
        </View>
        <View>
            <EasyToUse 
                width={wp(90)}
                height={hp(50)}
            />
        </View>
      <TouchableOpacity onPress={()=> props.goNext()} activeOpacity={0.8} style={styles.nextBtn}>
        <Text style={styles.textWhite}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default First