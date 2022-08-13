import React, {useState, useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '../../components/intro/Style';
import modalStyles from '@components/auth/Style';

// Components
import { AppContext } from '../../context/context'
import { AppStorage } from '../../utils';
import LanguageModal from '../../modal/LanguageModal'
import First from '@components/intro/First';
import Second from '@components/intro/Second';

const Intro = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(true);
  
  const {lang, getLang, getIntro} = useContext(AppContext);


  const showLanguageModal = () => {
    setShowModal(true);
  }
  const hideLanguageModal = (value) => {
    AppStorage.setItem('@user.language', value);
    getLang(value)
    setShowModal(false);
  };

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
      <View style={modalStyles.langBox}>
        <TouchableOpacity onPress={showLanguageModal}>
          <Text style={[modalStyles.textPink, {fontFamily: 'BreeSerif-Regular'}]}>Language {lang}</Text>
        </TouchableOpacity>
      </View>

      {step ?
        <First 
          goNext = {NextHandler}
        />
        :
        <Second 
          IntoHandler = {GoAuth}
        />
      }

  
      {showModal && (
        <LanguageModal
          languageAction={hideLanguageModal}
          selectedLang={lang}
        />
      )}
    </View>
  )
}

export default Intro