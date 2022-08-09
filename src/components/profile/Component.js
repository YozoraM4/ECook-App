import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
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
import BackIcon from '@assets/icons/back'
import BasketIcon from '@assets/icons/basket'
import Language from '@assets/icons/language';
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

        <View style={styles.avatarContainer}>
          <Frame
            width={wp(100)}
            height={hp(22)}
            colors='#fff'
          />
          <Image style={styles.avatar} source={{uri: 'https://cdn.alchemistcodedb.com/file/bb-acdb/images/UnitImages2/ts_esca.png'}} />
        </View>
        
        <View style={styles.userInfo}>
          <Text style={[styles.userName, styles.textPink]}>{props.userData.name}</Text>
          <View style={styles.rowAround}>
            <View>
              <Text>{local.CRecipes}</Text>
              <View style={styles.flexRow}>
                <ChefIcon
                  width={wp(5)}
                  height={hp(5)}
                  colors="#fd7463"
                />
                <Text style={[styles.textPink, {paddingHorizontal:hp(1)}]}>10</Text>
              </View>
            </View>
            <View>
              <Text>{local.SRecipes}</Text>
              {/* <Text style={styles.textPink}> | </Text> */}
              <View style={styles.flexRow}>
                <BookMarkIcon
                  width={wp(5)}
                  height={hp(5)}
                  colors="#fd7463"
                />
                <Text style={[styles.textPink, {paddingHorizontal:hp(1)}]}>27</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.sectionBox}>
            <Text style={[styles.options, styles.textPink]}>Options</Text>
            <TouchableOpacity activeOpacity={0.8} style={[styles.rowBetween, styles.section, styles.shadow]}>
              <View style={styles.flexRow}>
                <ChefIcon width={wp(4)} height={hp(4)} colors="#fd7463"/>
                <Text style={styles.actionText}>Create new recipes</Text>
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
                <Text style={styles.actionText}>Change Language</Text>
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
                <Text style={styles.actionText}>Shopping List</Text>
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
                <Text style={styles.actionText}>Saved Recipes</Text>
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