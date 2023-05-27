import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './Header.styles'
import { IMAGES } from '../../theme/appTheme'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={IMAGES.titleHeader}
        style={{
          width: 160,
          height: 60
        }}
        resizeMode='contain'
      />
      
    </View>
  )
}

export default Header