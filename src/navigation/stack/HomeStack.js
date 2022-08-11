import React,{useLayoutEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// Screens
import HomeScreen from '@screens/home/Home'
import DetailScreen from '../../screens/home/Detail'

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let hideRouteName = ['Detail', 'Edit'];
    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      hideRouteName.includes(routeName == undefined ? 'HomeStack' : routeName)
    ) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='HomeScreen' 
            component={HomeScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen name='Detail' component={DetailScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default HomeStack