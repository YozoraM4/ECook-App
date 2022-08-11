import React,{ useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
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
    </View>
  )
}

export default Home