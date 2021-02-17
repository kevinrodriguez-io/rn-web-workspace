import React, { FC, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { loadAsync } from 'expo-font'
import ButtonsContainer from 'components/ButtonsContainer'

const App: FC = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        await loadAsync({
          'OpenSans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
          'OpenSans-LightItalic': require('../assets/fonts/OpenSans-LightItalic.ttf'),
          'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
          'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
          'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
          'OpenSans-SemiBoldItalic': require('../assets/fonts/OpenSans-SemiBoldItalic.ttf'),
          'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
          'OpenSans-BoldItalic': require('../assets/fonts/OpenSans-BoldItalic.ttf'),
          'OpenSans-ExtraBold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
          'OpenSans-ExtraBoldItalic': require('../assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
        })
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])
  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ButtonsContainer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
