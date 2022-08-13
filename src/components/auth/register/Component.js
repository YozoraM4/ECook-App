import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '../Style'

// Components
import { UseLocal } from '../../../hook';

const RegisterComponent = (props) => {
  const local = UseLocal();
  return (
    <View style={styles.componentContainer}>
      <Image style={{position: 'absolute', resizeMode: 'cover',width: wp(100), height: hp(95), top: hp(0)}} source={require('../../../../assets/images/2.png')} />
      <View style={styles.form}>
        <View style={styles.logo}>
          <Text style={styles.login}>{local.register}</Text>
          <View style={[styles.input, styles.shadow]}>
            <TextInput
              value={props.nameValue}
              onChangeText={props.onChangeName}
              placeholder={local.name}
              style={{fontFamily: 'BreeSerif-Regular'}}
            />
          </View>
          <View style={[styles.input, styles.shadow]}>
            <TextInput
              value={props.passwordValue}
              onChangeText={props.onChangePassword}
              placeholder={local.pwd}
              secureTextEntry={true}
              style={{fontFamily: 'BreeSerif-Regular'}}
            />
          </View>
          <TouchableOpacity onPress={()=> props.registerAction()} style={[styles.loginBtn, styles.shadow]}>
            <Text style={[styles.text, styles.textWhite]}>{local.register}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.textWhite, {fontFamily: 'BreeSerif-Regular'}]}>{local.haveAcc}</Text>
        <TouchableOpacity onPress={()=> props.goLogin()} style={styles.footerBtn}>
          <Text style={[styles.text, styles.textWhite]}>{local.login}!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterComponent