import React from 'react'
import { Text, View } from 'react-native'
import MainNavigator from './src/navigators/MainNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
