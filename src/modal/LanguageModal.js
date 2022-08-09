import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
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

const LanguageModal = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.modalBox, styles.shadow]}>
          <Text style={styles.header}>Change Language</Text>
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
      </View>
    </View>
  )
}

export default LanguageModal