import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Stacks
import TabNavigator from './tabNvigator/TabNavigator'

const Navigator = () => {
  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  )
}

export default Navigator