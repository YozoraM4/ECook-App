import React, {useState, useContext, useEffect} from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

// Style
import styles from '@components/profile/Style'

// Context
import { AppContext } from '@context/context';
import { AppStorage } from '../../utils'

// Components
import Component from '@components/profile/Component'
import LanguageModal from '../../modal/LanguageModal'
import * as actionProfile from '../../store/actions/profile';

const Profile = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const {lang, getLang, getAuth, userInfo, getUserInfo} = useContext(AppContext);

  const saveRecipes = useSelector(state=> state.SavedList.savedRecipes)
  const likedRecipes = useSelector(state => state.LikedList.likedRecipe)
  const userData = useSelector(state => state.UserDataList.userData)

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(actionProfile.add(userInfo))
  },[])

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
  
  const EditHandler = () => {
    navigation.navigate('Edit', {like: likedRecipes}, {save: saveRecipes})
  };

  return (
    <View style={styles.container}>
      <Component 
        saved = {saveRecipes}
        liked = {likedRecipes}
        userData = {userData}
        goBasket = {BasketHandler}
        goSave = {SavedHandler}
        goAuth = {AuthHandler}
        edit = {EditHandler}
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