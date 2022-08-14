import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from './Style'

// Icons
import Clock from '@assets/icons/clock';
import Close from '@assets/icons/close';
import BookMarkIcon from '@assets/icons/bookmark';

// Components
import { UseLocal } from '../../hook';

const Component = (props) => {
  const local = UseLocal();
  const savedData = props.food

  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={()=> props.goToDetail(item)}>
        <Image source={{uri:item.image}} style={styles.food}/>
        <View style={styles.nameBox}>
          <Text style={styles.foodName}>{item.name}</Text>
          <View style={[styles.flexRow, {paddingVertical: hp(1)}]}>
            <Clock width={hp(2)} height={hp(2)} colors='#fff'/>
            <Text style={styles.duration}>{item.duration}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.componentContainer}>
      <View style={[styles.rowBetween, {paddingHorizontal: hp(2), paddingVertical: hp(1.5), backgroundColor: '#f6846b'}]}>
        <View>
        <Text style={[styles.headline, styles.textWhite]}>{local.saved}</Text>
        </View>
        <BookMarkIcon width={wp(5)} height={hp(5)} colors='#fff' fill='#fff' />
      </View>
      {savedData.length > 0 ?
        <Text style={[styles.textPink, {fontSize: hp(2.5), fontFamily: 'BreeSerif-Regular', fontWeight: '200', padding: hp(2)}]}>{local.totalRecipe} : {savedData.length}</Text>
        :
        null
      }
      {savedData.length > 0 ?
          <ScrollView style={{marginBottom: hp(2)}} >
            <FlatList 
              showsVerticalScrollIndicator={false}
              data={savedData}
              renderItem={renderComponent}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              style={styles.foodLists}
            />
          </ScrollView>
        :
        <View style={styles.flex}>
          <BookMarkIcon width={wp(30)} height={hp(20)} colors='#d5d5d5' fill='#aeaeae' />
          <Text style={{color: '#d5d5d5', fontFamily: 'BreeSerif-Regular', fontSize: hp(3), fontWeight: '500'}}>{local.nsRecipe}</Text>
        </View>
      }
    </View>
  )
}

export default Component