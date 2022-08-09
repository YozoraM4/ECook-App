import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from './Style'

// Icons
import BasketIcon from '@assets/icons/basket'
import Sakura from '@assets/icons/sakura'
import Close from '@assets/icons/close'

const Component = (props) => {
  const temp = props.data
  const renderComponent = ({item}) => {
    return (
      <View style={[styles.rowBetween, styles.itemBox, styles.shadow]}>
        <View style={styles.flexRow}>
          <Text style={[styles.name]}>{item.name}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={[styles.name]}>{item.unit}</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={()=> props.remove(item)}>
              <Close width={hp(2)} height={hp(2)} colors='#fd5540' />
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.componentContainer}>
        <View style={[styles.rowBetween, {paddingHorizontal: hp(2), paddingVertical: hp(0.5), backgroundColor: '#f6846b'}]}>
          <View>
            <Text style={[styles.headline, styles.textWhite]}>Shopping</Text>
          </View>
          <TouchableOpacity onPress={()=> props.show()}  style={{padding: hp(1), transform: [{ rotate: "45deg" }]}}>
              <Close width={wp(5)} height={hp(5)} colors='#fff' fill='#fff' />
            </TouchableOpacity>
        </View>

        {temp.length > 0 ?
          <>
            <View style={styles.flexRow}>
              <Text style={[styles.textPink, {fontSize: hp(2.5), fontWeight: '800', padding: hp(2)}]}>Total Ingredients : {temp.length}</Text>
            </View>
            <ScrollView style={{paddingHorizontal: hp(2)}} showsVerticalScrollIndicator={false}>
                <FlatList  
                  showsVerticalScrollIndicator={false}
                  data={temp}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderComponent}
                  style={styles.listBox}
                />
            </ScrollView>
          </>
          :
          <View style={styles.flex}>
            <BasketIcon width={wp(30)} height={hp(20)} colors='#d5d5d5' />
            <Text style={{color: '#d5d5d5', fontSize: hp(3), fontWeight: 'bold'}}>No Ingredients!</Text>
          </View>
        }
    </View>
  )
}

export default Component