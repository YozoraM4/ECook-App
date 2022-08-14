import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

// Styles
import styles from '@components/save/Style'

// Components
import Component from '@components/save/Component'
import * as actionSave from '../../store/actions/save'

const Save = ({navigation}) => {
  const saveRecipes = useSelector(state=> state.SavedList.savedRecipes)
  const detailHandler = value => {
    navigation.navigate('Detail', {food: value});
  };

  return (
    <View style={styles.container}>
      <Component 
        food={saveRecipes}
        goToDetail={detailHandler}
      />
    </View>
  )
}

export default Save