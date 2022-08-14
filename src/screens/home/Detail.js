import React, {useEffect, useState, useContext} from 'react'
import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux'
import Animated,{useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


// Styles
import styles from './Style'

// Icons
import BackIcon from '@assets/icons/back'
import BookMarkIcon from '@assets/icons/bookmark'
import HeartIcon from '@assets/icons/heart';
import Sakura from '@assets/icons/sakura';

// Components
import * as actionSave from '../../store/actions/save'
import * as actionLike from '../../store/actions/like';
import * as actionRecipe from '../../store/actions/recipe';
import { UseLocal } from '../../hook';
import foodList from '../../data/food';

const Detail = ({route, navigation}) => {
  const {food} = route.params;
  const local = UseLocal();
  const dispatch = useDispatch();

  const save = (value) => {
    let update = {
      id: food.id,
      name: food.name,
      image: food.image,
      duration: food.duration,
      style: food.style,
      serve: food.serve,
      like: food.like,
      isLike: food.isLike,
      isSave: true,
      ingredients: food.ingredients,
      instructions: food.instructions,
    }
    dispatch(actionRecipe.update(update));
    dispatch(actionSave.add(value));
    ToastAndroid.show(local.addSave, ToastAndroid.SHORT);
    navigation.goBack()
  }
  
  const unSave = (value) => {
    let update = {
      id: food.id,
      name: food.name,
      image: food.image,
      duration: food.duration,
      style: food.style,
      serve: food.serve,
      like: food.like,
      isLike: food.isLike,
      isSave: false,
      ingredients: food.ingredients,
      instructions: food.instructions,
    }
    dispatch(actionRecipe.update(update));
    dispatch(actionSave.remove(value.id));
    ToastAndroid.show(local.rmSave, ToastAndroid.SHORT);
    navigation.goBack()
  }

  const Like = (value) => {
    let update = {
      id: food.id,
      name: food.name,
      image: food.image,
      duration: food.duration,
      style: food.style,
      serve: food.serve,
      like: food.like + 1,
      isLike: true,
      isSave: food.isSave,
      ingredients: food.ingredients,
      instructions: food.instructions,
    }
    dispatch(actionRecipe.update(update));
    dispatch(actionLike.like(value));
    ToastAndroid.show(local.addLike, ToastAndroid.SHORT);
    navigation.goBack()
  }

  const UnLike = (value) => {
    let update = {
      id: food.id,
      name: food.name,
      image: food.image,
      duration: food.duration,
      style: food.style,
      serve: food.serve,
      like: food.like - 1,
      isLike: false,
      isSave: food.isSave,
      ingredients: food.ingredients,
      instructions: food.instructions,
    }
    dispatch(actionRecipe.update(update));
    dispatch(actionLike.unlike(value.id));
    ToastAndroid.show(local.rmLike, ToastAndroid.SHORT);
    navigation.goBack()
  }

  const positions = useSharedValue(hp(10));
  const animatedBox = useAnimatedStyle(()=> {
  return {
      transform: [{translateY: positions.value}]
  }
  })

  useEffect(()=> {
  positions.value = withTiming(hp(0), {
      duration: 1500,
      easing: Easing.bounce
  })
  },[])
  
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <View style={styles.actionBar}>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8} onPress={()=> navigation.goBack()}>
            <BackIcon
                width={hp(2.5)}
                height={hp(2.5)}
                colors='#f6846b'
              />
          </TouchableOpacity>
          
           {food.isSave ?
              <TouchableOpacity onPress={()=> unSave(food)} style={styles.actionBtn} activeOpacity={0.8}>
                <BookMarkIcon
                  width={hp(2.5)}
                  height={hp(2.5)}
                  colors='#f6846b'
                  fill='#f6846b'
                /> 
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={()=> save(food)} style={styles.actionBtn} activeOpacity={0.8}>
                <BookMarkIcon
                  width={hp(2.5)}
                  height={hp(2.5)}
                  colors='#f6846b'
                />
              </TouchableOpacity>
           }
        </View>
      </View>

      <Image 
        style={styles.image}
          source={{uri: food.image}}
      />

      <Animated.View style={[animatedBox, styles.scrollView, {overflow: 'hidden'}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.description}>
            <View style={styles.header}>
              <View>
                <Text style={styles.headTitle}>{food.name}</Text>
                <Text style={styles.subTitle}>{food.style}</Text>
              </View>
              
              {food.isLike ?
                <TouchableOpacity activeOpacity={0.8} onPress={()=> UnLike(food)} style={styles.rowBetween}>
                  <View style={styles.flexRow}>
                    <HeartIcon
                      width={hp(3)}
                      height={hp(3)}
                      colors='#f6846b'
                      fill='#f6846b'
                    /> 
                    <Text style={[styles.textPink, {paddingHorizontal:hp(1), fontFamily: 'BreeSerif-Regular'}]}>{food.like}</Text>
                  </View>
                </TouchableOpacity>
                :
                <TouchableOpacity activeOpacity={0.8} onPress={()=> Like(food)} style={styles.rowBetween}>
                  <View style={styles.flexRow}>
                    <HeartIcon
                      width={hp(3)}
                      height={hp(3)}
                      colors='#f6846b'
                    /> 
                    <Text style={[styles.textPink, {paddingHorizontal:hp(1), fontFamily: 'BreeSerif-Regular'}]}>{food.like}</Text>
                  </View>
                </TouchableOpacity>
            }
            </View>

            <View style={[styles.rowBetween, {paddingVertical: hp(2.5)}]}>
              <View style={styles.rowBetween}>
                  <Text style={{paddingRight: hp(1.5), fontFamily: 'BreeSerif-Regular'}}>Preparation</Text>
                  <Text style={[styles.textPink, {paddingRight: hp(0.5), fontFamily: 'BreeSerif-Regular'}]}>{food.duration}</Text>
              </View>
              <View style={styles.rowBetween}>
                  <Text style={{paddingRight: hp(1.5), fontFamily: 'BreeSerif-Regular'}}>Serve</Text>
                  <Text style={[styles.textPink, {fontFamily: 'BreeSerif-Regular'}]}>{food.serve}</Text>
              </View>
            </View>
            
            <View style={styles.ingredientsBox}>
              <Text style={[styles.textIngredients, styles.textPink]}>Ingredients</Text>
              <View style={styles.itemBox}>
                  {food.ingredients.map((item, index)=>{
                    return (
                      <View key={index} style={styles.flexRow}>
                        <Sakura
                          width={hp(3)}
                          height={hp(3)}
                          colors='#fd7463'
                        />
                        <Text style={{fontFamily: 'BreeSerif-Regular'}}>{item}</Text>
                      </View>
                    ) 
                  })
                  }

              </View>
            </View>

            <View>
              <Text style={[styles.textIngredients, styles.textPink]}>Instructions</Text>
              <View style={styles.itemBox}>
                  {food.instructions.map((item, index)=>{
                    return (
                      <View key={index} style={[styles.flexRow, styles.instruction]}>
                        <Sakura
                          width={hp(3)}
                          height={hp(3)}
                          colors='#fd7463'
                        />
                        <Text style={{fontFamily: 'BreeSerif-Regular'}}>{item}</Text>
                      </View>
                    ) 
                  })
                  }
              </View>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  )
}

export default Detail