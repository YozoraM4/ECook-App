import { View, Text, Image } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from './Style'

// Icons 
import Logo from '@assets/icons/logo'
import BackIcon from '@assets/icons/back';

const Component = () => {
  return (
    <View style={styles.componentContainer}>
      <View>
        <View style={styles.avatarContainer}>
          <Image source={{uri:'https://cdn140.picsart.com/307901995121211.png?type=webp&to=min&r=240'}} style={styles.avatar} />
        </View>
      </View>
    </View>
  )
}

export default Component