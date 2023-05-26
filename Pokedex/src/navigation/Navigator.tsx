import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackInitial } from './StackApp'

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackInitial />
    </NavigationContainer>
  )
}

export default Navigator