import React, {useState, useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '@components/auth/Style'

// Components
import { AppContext } from '@context/context'
import { AppStorage } from '../../utils';
import LoginComponent from '@components/auth/login/Component';
import RegisterComponent from '@components/auth/register/Component';

const Login = ({navigation}) => {
  const [showBox, setShowBox] = useState(true);
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  const {getUserInfo, getAuth} = useContext(AppContext);

  const ShowBoxHandler = () => {
    setShowBox(!showBox)
  }
  const LoginHandler = () => {
    let token = 'hueufhofieo';
    try {
      const userData = AppStorage.getItem('@user.data');
      if (userData) {
        const format = JSON.parse(userData);
        if(format.name === name && format.password === password){
          getAuth(true);
        AppStorage.setItem('@user.token', token);
        }
      } else {
        getAuth(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const RegisterHandler = () => {
    let token = 'ajfiewoweopof';
    const userData = {
      name: name,
      password: password, 
    };

    try {
      AppStorage.setItem('@user.token', token);
      AppStorage.setItem('@user.data', JSON.stringify(userData));
      getUserInfo(userData);
      getAuth(true)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      {showBox ?
        <LoginComponent 
          nameValue={name}
          onChangeName={value => setName(value)}
          passwordValue={password}
          onChangePassword={value=> setPassword(value)}
          loginAction={LoginHandler}
          goRedister={ShowBoxHandler}
        />
           :
        <RegisterComponent 
          nameValue={name}
          onChangeName={value => setName(value)}
          passwordValue={password}
          onChangePassword={value=> setPassword(value)}
          registerAction={RegisterHandler}
          goLogin={ShowBoxHandler}
        />
     }
    </View>
  )
}

export default Login