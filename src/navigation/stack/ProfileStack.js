import React, {useLayoutEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// Screens
import ProfileScreen from '@screens/profile/Profile'
import EditScreen from '@screens/profile/Edit'

const Stack = createNativeStackNavigator();

const ProfileStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let hideRouteName = ['Edit'];
    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      hideRouteName.includes(routeName == undefined ? 'ProfileStack' : routeName)
    ) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='ProfileScreen' 
            component={ProfileScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen name='Edit' component={EditScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default ProfileStack