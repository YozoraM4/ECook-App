import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import IntroScreen from '@screens/intro/Intro'

const Stack = createNativeStackNavigator();

const IntroStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
              name='Ingredient' 
              component={IntroScreen}
              options={{headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default IntroStack