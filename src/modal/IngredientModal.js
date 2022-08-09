import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
// Style
import styles from './Style'

// Icons
import Close from '@assets/icons/close';
import Sakura from '@assets/icons/sakura';

const IngredientModal = (props) => {
  return (
    <View style={styles.container}>
        <View style={[styles.modalBox, styles.shadow, {width: wp(80)}]}>
            <View style={styles.rowBetween}>
                <Text style={styles.header}>Add new Ingredient</Text>
                <TouchableOpacity onPress={()=> props.hide()} activeOpacity={0.8} style={{paddingBottom: hp(3)}}>
                    <Close width={hp(2.5)} height={hp(2.5)} colors='#f6846b' />
                </TouchableOpacity>
            </View>
            <View>
               <View style={[styles.rowBetween, styles.inputBox]}>
                    <TextInput 
                        value={props.name}
                        onChangeText={props.onChangeName}
                        placeholder='Ingredient'
                        style={[styles.input, styles.shadow, {width: '70%', marginRight: hp(1)}]}
                    />
                    <TextInput 
                        value={props.unit}
                        onChangeText={props.onChangeUnit}
                        placeholder='Unit'
                        style={[styles.input, styles.shadow, {width: '30%'}]}
                    />
               </View>
               <View style={styles.flexRow}>
                   <Sakura width={hp(2.5)} height={hp(2.5)} colors='#f6846b' />
                    <Text>Add Ingredient at Item you want</Text>
               </View>
               <View style={styles.flexRow}>
                   <Sakura width={hp(2.5)} height={hp(2.5)} colors='#f6846b' />
               <Text>Add unit at the amount you want</Text>
               </View>
            </View>
            <View style={[styles.flexRow, {justifyContent: 'flex-end', paddingTop: hp(3)}]}>
                {/* <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8} onPress={()=> props.hide()}>
                    <Text>Back</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={[styles.actionBtn, styles.shadow, {backgroundColor: '#fd7463'}]} activeOpacity={0.8} onPress={()=> props.add()}>
                    <Text style={styles.textWhite}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default IngredientModal