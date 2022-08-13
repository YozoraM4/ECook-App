import React, {useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Animated,{useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
// Style
import styles from './Style'

// Icons
import Close from '@assets/icons/close';
import Sakura from '@assets/icons/sakura';

// Components
import { UseLocal } from '../hook';

const IngredientModal = (props) => {
    const local = UseLocal();

    const positions = useSharedValue(hp(-100));
    const animatedModal = useAnimatedStyle(()=> {
    return {
        transform: [{translateY: positions.value}]
    }
    })

    useEffect(()=> {
    positions.value = withTiming(hp(0), {
        duration: 500,
        easing: Easing.in,
    })
    },[])
  return (
    <View style={styles.container}>
        <Animated.View style={[animatedModal, styles.modalBox, styles.shadow, {width: wp(80)}]}>
            <View style={styles.rowBetween}>
                <Text style={styles.header}>{local.add}</Text>
                <TouchableOpacity onPress={()=> props.hide()} activeOpacity={0.8} style={{paddingBottom: hp(3)}}>
                    <Close width={hp(2.5)} height={hp(2.5)} colors='#f6846b' />
                </TouchableOpacity>
            </View>
            <View>
               <View style={[styles.rowBetween, styles.inputBox]}>
                    <TextInput 
                        value={props.name}
                        onChangeText={props.onChangeName}
                        placeholder={local.ingredient}
                        style={[styles.input, styles.shadow, {width: '70%', marginRight: hp(1)}]}
                    />
                    <TextInput 
                        value={props.unit}
                        onChangeText={props.onChangeUnit}
                        placeholder={local.unit}
                        style={[styles.input, styles.shadow, {width: '30%'}]}
                    />
               </View>
               <View style={styles.flexRow}>
                   <Sakura width={hp(2.5)} height={hp(2.5)} colors='#f6846b' />
                    <Text style={{fontFamily: 'BreeSerif-Regular'}}>{local.title}</Text>
               </View>
               <View style={styles.flexRow}>
                   <Sakura width={hp(2.5)} height={hp(2.5)} colors='#f6846b' />
               <Text style={{fontFamily: 'BreeSerif-Regular'}}>{local.titleu}</Text>
               </View>
            </View>
            <View style={[styles.flexRow, {justifyContent: 'flex-end', paddingTop: hp(3)}]}>
                {/* <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8} onPress={()=> props.hide()}>
                    <Text>Back</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={[styles.actionBtn, styles.shadow, {backgroundColor: '#fd7463'}]} activeOpacity={0.8} onPress={()=> props.add()}>
                    <Text style={[styles.textWhite, {fontFamily: 'BreeSerif-Regular'}]}>{local.add}</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    </View>
  )
}

export default IngredientModal