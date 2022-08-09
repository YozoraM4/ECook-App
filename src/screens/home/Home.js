import React,{ useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from '@components/home/Style';

// Icons
import Close from '@assets/icons/close';

// Components
import Component from '@components/home/Component';
import CreateModal from '../../modal/CreateModal';

// Data
import foods from '@data/food';

const Home = ({navigation}) => {
  const [apiData, setapiData] = useState();

  // useEffect(()=> {
  //   fetch('https://mocki.io/v1/c234ad40-86dc-46a2-b619-bd458815fd6f')
  //   .then((res)=> res.json())
  //   .then((res)=> {
  //     setapiData(res)
  //   })
  // },[])
  const ModalHandler = () => {
    navigation.navigate('Modal')
  }

  const detailHandler = value => {
    navigation.navigate('Detail', {food: value});
  };

  return (
    <View style={styles.container}>
      <Component 
        data={foods}
        goProfile={()=> {navigation.navigate('Profile')}}
        goToDetail={detailHandler}
      />
      <TouchableOpacity onPress={ModalHandler} style={styles.addBtn}>
        <Close width={wp(5)} height={hp(5)} colors='#f6846b' />
      </TouchableOpacity>

    </View>
  )
}

export default Home