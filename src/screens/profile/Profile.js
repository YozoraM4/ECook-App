import { View, Text } from 'react-native'
import React from 'react'

// Style
import styles from '@components/profile/Style'

// Components
import Component from '@components/profile/Component'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Component />
    </View>
  )
}

export default Profile