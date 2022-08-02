import React from 'react'
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '@components/home/Style';

// Icons
import SearchIcon from '@assets/icons/search';
import Logo from '@assets/icons/logo';

const Component = (props) => {

  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={()=> props.goToDetail(item)}>
        <Image source={{uri:item.image}} style={styles.food}/>
        <View style={styles.nameBox}>
          <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.componentContainer}>
      <View style={styles.headerBox}>
        <Text style={styles.title}>What do you want</Text>
        <Text style={styles.title}>to cook today?</Text>
        
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
        <Text style={styles.subTitle}>Popular Recipes</Text>
      </View>
      
      { props.data ?
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={props.data}
          renderItem={renderComponent}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          style={styles.foodLists}
        />
        :
        <View style={styles.container}>
          <Logo 
            width={hp(70)}
            height={hp(40)}
          />
        </View>
      }
    </View>
  )
}

export default Component