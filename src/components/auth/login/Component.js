import React, {useEffect} from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import Animated,{useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '../Style'

// Components
import { UseLocal } from '../../../hook';

const LoginComponent = (props) => {
  const local = UseLocal();

  const positions = useSharedValue(hp(-100));
  const animatedBox = useAnimatedStyle(()=> {
  return {
      transform: [{translateY: positions.value}]
  }
  })

  useEffect(()=> {
  positions.value = withTiming(hp(0), {
      duration: 1000,
      easing: Easing.bounce
  })
  },[])
  
  return (
    <View style={styles.componentContainer}>
      <Image style={{position: 'absolute', resizeMode: 'cover',width: wp(100), height: hp(95), top: hp(0)}} source={require('../../../../assets/images/2.png')} />
      <Animated.View style={[animatedBox, styles.form]}>
        <View style={styles.logo}>
          <Text style={styles.login}>{local.login}</Text>
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
          <TouchableOpacity onPress={()=> props.loginAction()} style={[styles.loginBtn, styles.shadow]}>
            <Text style={[styles.text, styles.textWhite]}>{local.login}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View style={styles.footer}>
        <Text style={[styles.textWhite, {fontFamily: 'BreeSerif-Regular'}]}>{local.noAcc}</Text>
        <TouchableOpacity onPress={()=> props.goRedister()} style={styles.footerBtn}>
          <Text style={[styles.text, styles.textWhite]}>{local.register}!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginComponent