import React, { useState, useEffect } from 'react'
import { View, ToastAndroid } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '@components/ingredient/Style'

// Components
import { UseLocal } from '../../hook';
import Component from '@components/ingredient/Component';
import IngredientModal from '../../modal/IngredientModal';
import * as actionItem from '../../store/actions/ingredient'

const Ingredient = () => {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState();
  const [unit, setUnit] = useState();

  const local = UseLocal();
  const shoppingItems = useSelector(state=> state.ItemList.Items)

  const ModalHandler = () => {
    setModal(!modal)
  }

  const ShowHandler = () => {
    setModal(!modal)
  }

  const dispatch = useDispatch();
  const AddHandler = () => {
    let data = {
      id: 1,
      name: item,
      unit: unit,
    }
    dispatch(actionItem.add(data));
    setModal(!modal);
    ToastAndroid.show(local.ingreAdd, ToastAndroid.SHORT);
    setItem('');
    setUnit('')
  }
  
  const DeleteHandler = (value) => {
    dispatch(actionItem.remove(value.id)),
    ToastAndroid.show(local.ingreRm, ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <Component 
        data={shoppingItems}
        show={ShowHandler}
        remove={DeleteHandler}
      />
      {modal && (
          <IngredientModal 
            name={item}
            onChangeName={value=> setItem(value)}
            unit={unit}
            onChangeUnit={value=> setUnit(value)}
            hide={ModalHandler}
            add={AddHandler}
          />
        )
      }
    </View>
  )
}

export default Ingredient