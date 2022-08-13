import React,{ useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
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
import * as actionRecipe from '../../store/actions/recipe';

// Data
import foods from '@data/food';

const Home = ({navigation}) => {
  const [search, setSearch] = useState();
  const [clear, setClear] = useState(false);
  const [apiData, setapiData] = useState();

  useEffect(()=> {
    // fetch('https://mocki.io/v1/c234ad40-86dc-46a2-b619-bd458815fd6f')
    // .then((res)=> res.json())
    // .then((res)=> {
    //   setapiData(res)
    // })
    dispatch(actionRecipe.recipe(foods))
  },[])

  const dispatch = useDispatch();
  const recipeList = useSelector(state=> state.RecipeList.Recipes)

  const SearchHandler = () => {
    dispatch(actionRecipe.search(search))
    setClear(!clear);
  }
  const ClearHandler = () => {
    dispatch(actionRecipe.recipe(foods));
    setClear(!clear);
    setSearch('');
  }
  const detailHandler = value => {
    navigation.navigate('Detail', {food: value});
  };

  return (
    <View style={styles.container}>
      <Component 
        data={recipeList}
        clear={clear}
        search={search}
        onChangeSearch={value=> setSearch(value)}
        searchAction={SearchHandler}
        clearAction={ClearHandler}
        goProfile={()=> {navigation.navigate('Profile')}}
        goToDetail={detailHandler}
      />
    </View>
  )
}

export default Home