import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import SaveScreen from '@screens/save/Save'

const Stack = createNativeStackNavigator();

const SaveStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Save Screen' 
            component={SaveScreen}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default SaveStack