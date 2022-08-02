import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


// Styles
import styles from './Style'

// Icons
import BackIcon from '@assets/icons/back'
import BookMarkIcon from '@assets/icons/bookmark'
import HeartIcon from '../../../assets/icons/heart';

const Detail = ({route, navigation}) => {
  const {food} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <View style={styles.actionBar}>
        {/*  */}
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8} onPress={()=> navigation.goBack()}>
            <BackIcon
                width={hp(3)}
                height={hp(3)}
                colors='#f6846b'
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
            <BookMarkIcon
                width={hp(3)}
                height={hp(3)}
                colors='#f6846b'
              />
          </TouchableOpacity>
        </View>
      </View>

      <Image 
        style={styles.image}
          source={{uri: food.image}}
        />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.description}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headTitle}>{food.name}</Text>
              <Text style={styles.subTitle}>{food.style}</Text>
            </View>
            <View style={styles.rowBetween}>
              <HeartIcon
                width={hp(3)}
                height={hp(3)}
                colors='#f6846b'
              />
              <Text style={[styles.textPink, {paddingHorizontal:hp(1)}]}>{food.like}</Text>
            </View>
          </View>

          <View style={[styles.rowBetween, {paddingVertical: hp(2.5)}]}>
            <View style={styles.rowBetween}>
                <Text style={{paddingRight: hp(1.5)}}>Preparation</Text>
                <Text style={styles.textPink}>{food.duration}</Text>
            </View>
            <View style={styles.rowBetween}>
                <Text style={{paddingRight: hp(1.5)}}>Serve</Text>
                <Text style={styles.textPink}>{food.serve}</Text>
            </View>
          </View>

          <View style={styles.ingredientsBox}>
            <Text style={[styles.textIngredients, styles.textPink]}>Ingredients</Text>
            <View style={styles.itemBox}>
                {food.ingredients.map((item, index)=> {
                  return(
                    <Text key={index}>. {item}</Text>
                  )
                })
                }   
            </View>
          </View>

          <View>
            <Text style={[styles.textIngredients, styles.textPink]}>Instructions</Text>
            <View style={styles.itemBox}>
                {food.instructions.map((item, index)=> {
                  return(
                    <Text key={index} style={styles.instruction}>- {item}</Text>
                  )
                })
                }   
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Detail