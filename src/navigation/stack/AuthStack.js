import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import LoginScreen from '@screens/auth/Auth'

const Stack = createNativeStackNavigator();

const RegisterStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Login' 
                component={LoginScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RegisterStack