import React, {useState, useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '../../components/intro/Style';

// Components
import { AppContext } from '../../context/context'
import { AppStorage } from '../../utils';
import First from '@components/intro/First';
import Second from '@components/intro/Second';

const Intro = () => {
  const [step, setStep] = useState(true);
  const {getIntro} = useContext(AppContext);

  const GoAuth = () => {
    let into = 'shown';
    AppStorage.setItem('@intro', into)
      getIntro(false);
  }
  
  const NextHandler = () => {
    setStep(false);
  }
  
  return (
    <View style={styles.container}>
      {step ?
        <First 
          goNext = {NextHandler}
        />
        :
        <Second 
          IntoHandler = {GoAuth}
        />
      }
    </View>
  )
}

export default Intro