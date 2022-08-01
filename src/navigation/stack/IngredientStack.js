import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import IngredientScreen from '@screens/ingredient/Ingredient'

const Stack = createNativeStackNavigator();

const IngredientStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Ingredient Screen' 
            component={IngredientScreen}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default IngredientStack