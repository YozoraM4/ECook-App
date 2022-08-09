import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
// Style
import styles from './Style';

// Icon
import SaveTime from '../../../assets/icons/introSave';

const Second = (props) => {
  return (
    <View style={styles.componentContainer}>
        <View style={styles.headBox}>
            <Text style={styles.headline}><Text style={styles.textPink}>Save</Text> Your Time</Text>
            <Text style={styles.subline}>Troubling in daily cooking, Just try this app!</Text>
            <Text style={styles.subline}>Ingredients and Instructions in detail step by step.</Text>
        </View>
        <View>
            <SaveTime 
                width={wp(90)}
                height={hp(50)}
            />
        </View>
      <TouchableOpacity onPress={()=> props.IntoHandler()} activeOpacity={0.8} style={styles.nextBtn}>
        <Text style={styles.textWhite}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Second