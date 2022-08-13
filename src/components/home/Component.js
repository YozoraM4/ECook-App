import React, {useEffect, useContext} from 'react'
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import Animated,{useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '@components/home/Style';

// Icons
import SearchIcon from '@assets/icons/search';
import ChefIcon from '@assets/icons/cook';
import Clock from '@assets/icons/clock';
import Close from '@assets/icons/close';

// Components
import { AppContext } from '@context/context'
import { UseLocal } from '../../hook';

const Component = (props) => {
  const local = UseLocal();
  const {userInfo} = useContext(AppContext);

  const positions = useSharedValue(wp(-100));
  const animatedHeader = useAnimatedStyle(()=> {
    return {
      transform: [{translateX: positions.value}]
    }
  })

  useEffect(()=> {
    positions.value = withTiming(wp(0), {
      duration: 1000,
      easing: Easing.in
    })
  },[])

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
      <View style={[styles.headerBox]}>
        <Animated.View style={[styles.rowBetween, animatedHeader]}>
          <View style={styles.header}>
            <Text style={styles.title}>{local.hello}, {userInfo.name}</Text>
            <Text style={styles.slogan}>{local.header}</Text>
          </View>
        </Animated.View>
        <View style={styles.searchBox}>
          <TextInput
            value={props.search}
            onChangeText={props.onChangeSearch}
            placeholder={local.search}
            style={styles.input}
          />
          {props.clear ?
            <TouchableOpacity onPress={()=> props.clearAction()}>
              <Close 
                colors='#fd7463'
                width={hp(2.5)}
                height={hp(2.5)}
              />
            </TouchableOpacity>
            :

            <TouchableOpacity onPress={()=> props.searchAction()}>
              <SearchIcon 
                colors='#fd7463'
                width={hp(3)}
                height={hp(3)}
              />
            </TouchableOpacity>
          }
        </View>
      </View>
      
      <Animated.View style={{padding: hp(2)}}>
        {props.clear ?
          <Text style={styles.subTitle}>{local.result} : {props.data.length}</Text>
          :
          <Text style={styles.subTitle}>{local.popular}</Text>
        } 
      </Animated.View>
      { props.data.length > 0 ?
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={props.data}
          renderItem={renderComponent}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          style={styles.foodLists}
        />
        :
        <View style={styles.flex}>
          <ChefIcon width={wp(30)} height={hp(20)} colors='#d5d5d5' />
          <Text style={{color: '#d5d5d5', fontSize: hp(3), fontWeight: '500', fontFamily: 'BreeSerif-Regular'}}>{local.nrecipe}</Text>
        </View>
      }
    </View>
  )
}

export default Component