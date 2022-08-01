import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import ProfileScreen from '@screens/profile/Profile'

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Profile Screen' 
            component={ProfileScreen}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default ProfileStack