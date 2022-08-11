import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from './Style'

// Icons 
import ChefIcon from '@assets/icons/cook';
import BookMarkIcon from '@assets/icons/bookmark';
import Logout from '@assets/icons/logout';
import Frame from '@assets/icons/frame';
import BackIcon from '@assets/icons/back';
import BasketIcon from '@assets/icons/basket';
import Language from '@assets/icons/language';
import HeartIcon from '@assets/icons/heart';

// Components
import { UseLocal } from '../../hook';

const Component = (props) => {
  const local = UseLocal();
  
  return (
    <View style={styles.componentContainer}>
      <View>
        <View style={styles.actionBox}>
          <TouchableOpacity onPress={()=> props.goAuth()} style={styles.actionBtn} activeOpacity={0.8}>
            <Logout
              width={hp(2.5)}
              height={hp(2.5)}
              colors="#fd7463"
              fill='#fd7463'
            />
          </TouchableOpacity>
        </View>

        
        {props.userData.map((item, index)=> {
            return (
              <View key={index} style={{alignItems: 'center', zIndex: 5, marginTop:hp(-5)}}>
                <View style={styles.avatarContainer}>
                  <Frame
                    width={wp(100)}
                    height={hp(22)}
                    colors='#d5d5d5'
                  />
                  {/* <Image style={styles.avatar} source={{uri: 'https://cdn.alchemistcodedb.com/file/bb-acdb/images/UnitImages2/ts_esca.png'}} /> */}
                  <Image style={styles.avatar} source={{uri: item.image}} />
                </View>
                <Text style={[styles.userName, styles.textPink]}>{item.name}</Text>
              </View>
            )
          })}
        <View style={styles.userInfo}>
          <View style={styles.rowAround}>
            <View>
              <Text style={{fontFamily: 'BreeSerif-Regular'}}>{local.LRecipes}</Text>
              <View style={styles.flexRow}>
                <HeartIcon
                  width={wp(5)}
                  height={hp(5)}
                  colors="#fd7463"
                  fill="#fd7463"
                />
                <Text style={[styles.textPink, {fontFamily: 'BreeSerif-Regular', paddingHorizontal:hp(1)}]}>{props.liked.length}</Text>
              </View>
            </View>
            <View>
              <Text style={{fontFamily: 'BreeSerif-Regular'}}>{local.SRecipes}</Text>
              {/* <Text style={styles.textPink}> | </Text> */}
              <View style={styles.flexRow}>
                <BookMarkIcon
                  width={wp(5)}
                  height={hp(5)}
                  colors="#fd7463"
                  fill="#fd7463"
                />
                <Text style={[styles.textPink, {fontFamily: 'BreeSerif-Regular', paddingHorizontal:hp(1)}]}>{props.saved.length}</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.sectionBox}>
            <Text style={[styles.options, styles.textPink]}>Options</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> props.edit()} style={[styles.rowBetween, styles.section, styles.shadow]}>
              <View style={styles.flexRow}>
                <ChefIcon width={wp(4)} height={hp(4)} colors="#fd7463"/>
                <Text style={[styles.actionText, {fontFamily: 'BreeSerif-Regular'}]}>Edit Profile</Text>
              </View>
              <View style={styles.flip}>
                <BackIcon
                  width={wp(3)}
                  height={hp(3)}
                  colors="#fd7463"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> props.changeLang()} style={[styles.rowBetween, styles.section, styles.shadow]}>
              <View style={styles.flexRow}>
                <Language width={wp(4)} height={hp(4)} colors="#fd7463"/>
                <Text style={[styles.actionText, {fontFamily: 'BreeSerif-Regular'}]}>Change Language</Text>
              </View>
              <View style={styles.flip}>
                <BackIcon
                  width={wp(3)}
                  height={hp(3)}
                  colors="#fd7463"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> props.goBasket()} style={[styles.rowBetween, styles.section, styles.shadow]}>
              <View style={styles.flexRow}>
                <BasketIcon width={wp(4)} height={hp(4)} colors="#fd7463"/>
                <Text style={[styles.actionText, {fontFamily: 'BreeSerif-Regular'}]}>Shopping List</Text>
              </View>
              <View style={styles.flip}>
                <BackIcon
                  width={wp(3)}
                  height={hp(3)}
                  colors="#fd7463"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> props.goSave()} style={[styles.rowBetween, styles.section, styles.shadow]}>
              <View style={styles.flexRow}>
                <BookMarkIcon width={wp(4)} height={hp(4)} colors="#fd7463"/>
                <Text style={[styles.actionText, {fontFamily: 'BreeSerif-Regular'}]}>Saved Recipes</Text>
              </View>
              <View style={styles.flip}>
                <BackIcon
                  width={wp(3)}
                  height={hp(3)}
                  colors="#fd7463"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Component