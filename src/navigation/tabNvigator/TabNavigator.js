import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Screens
import HomeStack from '../stack/HomeStack';
import ProfileStack from '../stack/ProfileStack';
import IngredientStack from '../stack/IngredientStack';
import SaveStack from '../stack/SaveStack';

// Icons
import ChefIcon from '@assets/icons/cook'
import HomeIcon from '@assets/icons/home';
import BasketIcon from '@assets/icons/basket';
import BookMarkIcon from '@assets/icons/bookmark';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarLabelStyle={{paddingVertical: hp()}}>
        <Tab.Screen 
          name='Home'
          component={HomeStack}
          options={{
            headerShown: false,
            title: 'Recipes',
            tabBarIcon: ({focused, color, size}) => (
              <HomeIcon
                colors={focused ? '#fd7463' : '#757575'}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.5),
              paddingBottom: hp(0.7),
            },

            tabBarActiveTintColor: '#fd7463',
            tabBarInactiveTintColor: '#757575',
          }}
        />

        <Tab.Screen 
          name='Ingredients'
          component={IngredientStack}
          options={{
            headerShown: false,
            title: 'Ingredients',
            tabBarIcon: ({focused, color, size}) => (
              <BasketIcon
                colors={focused ? '#fd7463' : '#757575'}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.5),
              paddingBottom: hp(0.7),
            },

            tabBarActiveTintColor: '#fd7463',
            tabBarInactiveTintColor: '#757575',
          }}
        />

        <Tab.Screen 
          name='Save'
          component={SaveStack}
          options={{
            headerShown: false,
            title: 'Save',
            tabBarIcon: ({focused, color, size}) => (
              <BookMarkIcon
                colors={focused ? '#fd7463' : '#757575'}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.5),
              paddingBottom: hp(0.7),
            },

            tabBarActiveTintColor: '#fd7463',
            tabBarInactiveTintColor: '#757575',
          }}
        />
        
        <Tab.Screen 
          name='Profile'
          component={ProfileStack}
          options={{
            headerShown: false,
            title: 'Profile',
            tabBarIcon: ({focused, color, size}) => (
              <ChefIcon
                colors={focused ? '#fd7463' : '#757575'}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.5),
              paddingBottom: hp(0.7),
            },

            tabBarActiveTintColor: '#fd7463',
            tabBarInactiveTintColor: '#757575',
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator