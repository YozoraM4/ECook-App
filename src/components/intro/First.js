import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Animated,{useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
// Style
import styles from './Style';

// Icon
import EasyToUse from '../../../assets/icons/introEasy';

// Components
import { UseLocal } from '../../hook';

const First = (props) => {
  const local = UseLocal();

  const textPositions = useSharedValue(wp(-100));
  const animatedText = useAnimatedStyle(()=> {
  return {
      transform: [{translateX: textPositions.value}]
  }
  })

  const iconsPositions = useSharedValue(wp(100));
  const animatedIcon = useAnimatedStyle(()=> {
    return {
      transform: [{translateX: iconsPositions.value}]
    }
  })

  useEffect(()=> {
    textPositions.value = withTiming(wp(0), {
        duration: 1000,
        easing: Easing.linear
    }),
    iconsPositions.value = withTiming(wp(0), {
      duration: 1000,
      easing: Easing.linear
    })
  },[])

  const Animation = () => {
    textPositions.value = withTiming(wp(100), {
      duration: 1000,
      easing: Easing.linear
    }),
    iconsPositions.value = withTiming(wp(-100), {
      duration: 1000,
      easing: Easing.linear
    })
  }

  return (
    <View style={styles.componentContainer}>
        <Animated.View style={[animatedText, styles.headBox]}>
            <Text style={styles.headline}><Text style={styles.textPink}>{local.easy}</Text> {local.toUse}</Text>
            <Text style={styles.subline}>{local.head1}</Text>
            <Text style={styles.subline}>{local.head2}</Text>
        </Animated.View>
        <Animated.View style={[animatedIcon]}>
            <EasyToUse 
                width={wp(90)}
                height={hp(50)}
            />
        </Animated.View>
      <TouchableOpacity onPressIn={Animation} onPress={()=> props.goNext()} activeOpacity={0.8} style={styles.nextBtn}>
        <Text style={styles.textWhite}>{local.next}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default First