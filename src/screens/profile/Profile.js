import React, {useState, useContext} from 'react'
import { View, Text } from 'react-native'
import {launchImageLibrary} from 'react-native-image-picker';

// Style
import styles from '@components/profile/Style'

// Context
import { AppContext } from '@context/context';
import { AppStorage } from '../../utils'

// Components
import Component from '@components/profile/Component'
import LanguageModal from '../../modal/LanguageModal'

const Profile = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const {lang, getLang, getAuth, userInfo} = useContext(AppContext);

  const showLanguageModal = () => {
    setShowModal(true);
  }
  const hideLanguageModal = (value) => {
    AppStorage.setItem('@user.language', value);
    getLang(value)
    setShowModal(false);
  };

  const AuthHandler = ()=> {
    AppStorage.removeItem('@user.token');
    getAuth(false);
  };

  const BasketHandler = ()=> {
    navigation.navigate('Ingredients')
  };

  const SavedHandler = ()=> {
    navigation.navigate('Save')
  };
  return (
    <View style={styles.container}>
      <Component 
        userData = {userInfo}
        goBasket = {BasketHandler}
        goSave = {SavedHandler}
        goAuth = {AuthHandler}
        changeLang = {showLanguageModal}
      />

      {showModal && (
        <LanguageModal
          languageAction={hideLanguageModal}
          selectedLang={lang}
        />
      )}
    </View>
  )
}

export default Profile