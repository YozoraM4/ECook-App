import React, {useContext} from 'react'
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '@components/home/Style';

// Icons
import SearchIcon from '@assets/icons/search';
import ChefIcon from '@assets/icons/cook';
import Frame from '@assets/icons/frame';
import Clock from '@assets/icons/clock';

// Components
import { AppContext } from '@context/context'

const Component = (props) => {
  const {userInfo} = useContext(AppContext);

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
      <View style={styles.headerBox}>
        <View style={styles.rowBetween}>
          <View style={styles.header}>
            <Text style={styles.title}>Hello {userInfo.name},</Text>
            <Text style={styles.slogan}>What do you want to cook today?</Text>
          </View>
          {/* <TouchableOpacity onPress={()=> props.goProfile()} style={styles.avatarContainer}>
            <Frame
              width={wp(100)}
              height={hp(10)}
              colors='#fff'
            />
            <Image style={styles.avatar} source={{uri: 'https://cdn.alchemistcodedb.com/file/bb-acdb/images/UnitImages2/ts_esca.png'}} />
          </TouchableOpacity> */}
        </View>
        <View style={styles.searchBox}>
          <SearchIcon 
            colors='#fd7463'
            width={hp(3)}
            height={hp(3)}
          />
          <TextInput
            inlineImageLeft='search_icon'
            placeholder='Recipe'
            style={styles.input}
          />
        </View>
      </View>
      
      <View style={{padding: hp(2)}}>
        <Text style={styles.subTitle}>Popular Recipes</Text>
      </View>
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
          <Text style={{color: '#d5d5d5', fontSize: hp(3), fontWeight: 'bold'}}>No Recipes!</Text>
        </View>
      }
    </View>
  )
}

export default Component