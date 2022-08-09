import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import {useDispatch} from 'react-redux'
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
import * as actionSave from '../../store/actions/save';

const Detail = ({route, navigation}) => {
  const [isSave, setIsSave] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const {food} = route.params;

  const dispatch = useDispatch();

    const save = (value) => {
      dispatch(actionSave.add(value));
      setIsSave(!isSave);
    }
    const Like = (value) => {
      setIsLike(!isLike);
    }
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
          <TouchableOpacity onPress={()=> save(food)} style={styles.actionBtn} activeOpacity={0.8}>
           {isSave ?
               <BookMarkIcon
                width={hp(2.5)}
                height={hp(2.5)}
                colors='#f6846b'
                fill='#f6846b'
              /> :
              <BookMarkIcon
                width={hp(2.5)}
                height={hp(2.5)}
                colors='#f6846b'
              />
           }
          </TouchableOpacity>
        </View>
      </View>

      <Image 
        style={styles.image}
          source={{uri: food.image}}
        />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.description}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headTitle}>{food.name}</Text>
              <Text style={styles.subTitle}>{food.style}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> Like(food)} style={styles.rowBetween}>
            {isLike ?
               <HeartIcon
                width={hp(3)}
                height={hp(3)}
                colors='#f6846b'
                fill='#f6846b'
              /> :
              <HeartIcon
                width={hp(3)}
                height={hp(3)}
                colors='#f6846b'
              />
           }
              <Text style={[styles.textPink, {paddingHorizontal:hp(1)}]}>{food.like}</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.rowBetween, {paddingVertical: hp(2.5)}]}>
            <View style={styles.rowBetween}>
                <Text style={{paddingRight: hp(1.5)}}>Preparation</Text>
                <Text style={[styles.textPink, {paddingRight: hp(0.5)}]}>{food.duration}</Text>
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
                    <View key={index} style={styles.flexRow}>
                      <Sakura
                         width={hp(3)}
                         height={hp(3)}
                         colors='#fd7463'
                      />
                      <Text>{item}</Text>
                    </View>
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
                    <View key={index} style={[styles.flexRow, styles.instruction]}>
                       <Sakura
                         width={hp(3)}
                         height={hp(3)}
                         colors='#fd7463'
                      />
                      <Text>{item}</Text>
                    </View>
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