import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import HomeScreen from '@screens/home/Home'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Home Screen' 
            component={HomeScreen}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default HomeStack