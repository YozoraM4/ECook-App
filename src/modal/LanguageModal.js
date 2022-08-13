import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Animated,{useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from './Style'

// Icons
import Sakura from '../../assets/icons/sakura'

// Components
import Languages from '../data/language';
import { UseLocal } from '../hook';

const LanguageModal = (props) => {
  const local = UseLocal();

  const positions = useSharedValue(hp(-100));
  const animatedModal = useAnimatedStyle(()=> {
  return {
      transform: [{translateY: positions.value}]
  }
  })

  useEffect(()=> {
  positions.value = withTiming(hp(0), {
      duration: 500,
      easing: Easing.in
  })
  },[])

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedModal, styles.modalBox, styles.shadow]}>
          <Text style={styles.header}>{local.lang}</Text>
          {Languages.map((item, index) => (
            <View key={item.id}>
                <TouchableOpacity style={styles.item}
                 onPress={() => props.languageAction(item.value)}>
                  {props.selectedLang === item.value ?
                    <Sakura width={hp(3)} height={hp(3)} colors='#fd7463'/> : <Sakura width={hp(3)} height={hp(3)}/>
                   } 
                  <Text
                      style={[
                      styles.title,
                      {color: props.selectedLang === item.value ? '#fd7463' : '#757575'},
                      ]}>
                        {item.name}
                  </Text>
                </TouchableOpacity>
            </View>
            ))}
      </Animated.View>
    </View>
  )
}

export default LanguageModal