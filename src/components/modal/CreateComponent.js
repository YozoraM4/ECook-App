import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
// Style 
import styles from './Style'

// Icons
import BackIcon from '@assets/icons/back'
import Frame from '@assets/icons/frame'

const CreateComponent = (props) => {
  return (
    <View style={styles.componentContainer}>
        <View style={[styles.flexRow, styles.headAction]}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> props.back()}>
            <BackIcon width={hp(3)} height={hp(3)} colors='#fd5540' />
            </TouchableOpacity>
            <Text style={styles.headline}>Create New Recipe</Text>
        </View>
        <View style={[styles.form, {alignItems: 'center', marginVertical: hp(5)}]}>
            <View>
                <Frame width={hp(10)} height={hp(10)} colors='#fd5540' />
            </View>
            <TextInput 
                value={props.name}
                onChangeText={props.onChangeName}
                placeholder='Name'
                style={[styles.input, styles.shadow, styles.fullWidth]}
            />
            <TextInput 
                value={props.style}
                onChangeText={props.onChangeStyle}
                placeholder='Recipe Style (eg: Traditional Recipes)'
                style={[styles.input, styles.shadow, styles.fullWidth]}
            />
            <View style={styles.rowBetween}>
                <TextInput 
                    value={props.time}
                    onChangeText={props.onChangeTime}
                    placeholder='Preparation Time'
                    style={[styles.input, styles.shadow, {width: '49%'}]}
                />
                <TextInput 
                    value={props.serve}
                    onChangeText={props.onChangeServe}
                    placeholder='Serve'
                    keyboardType='number-pad'
                    style={[styles.input, styles.shadow, {width: '49%'}]}
                />
            </View>
            <TextInput 
                multiline
                value={props.ingredient}
                onChangeText={props.onChangeIngredient}
                placeholder='Ingredients'
                style={[styles.input, styles.shadow, styles.fullWidth]}
            />
            <TextInput 
                multiline
                value={props.instructions}
                onChangeText={props.onChangeInstructions}
                placeholder='Instructions'
                style={[styles.input, styles.shadow, styles.fullWidth]}
            />
            <View style={styles.fullWidth}>
                <TouchableOpacity onPress={()=> props.create()} style={styles.actionBtn} activeOpacity={0.8}>
                    <Text style={styles.textWhite}>Create</Text>
                </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

export default CreateComponent