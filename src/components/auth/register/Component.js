import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '../Style'

const RegisterComponent = (props) => {
  return (
    <View style={styles.componentContainer}>
      <Image style={{position: 'absolute', resizeMode: 'cover',width: wp(100), height: hp(95), top: hp(0)}} source={require('../../../../assets/images/2.png')} />
      <View style={styles.form}>
        <View style={styles.logo}>
          <Text style={styles.login}>Register</Text>
          <View style={[styles.input, styles.shadow]}>
            <TextInput
              value={props.nameValue}
              onChangeText={props.onChangeName}
              placeholder='Name .....'
            />
          </View>
          <View style={[styles.input, styles.shadow]}>
            <TextInput
              value={props.passwordValue}
              onChangeText={props.onChangePassword}
              placeholder='Password .....'
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity onPress={()=> props.registerAction()} style={[styles.loginBtn, styles.shadow]}>
            <Text style={[styles.text, styles.textWhite]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textWhite}>If your already have an account </Text>
        <TouchableOpacity onPress={()=> props.goLogin()} style={styles.footerBtn}>
          <Text style={[styles.text, styles.textWhite]}>Login !</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterComponent