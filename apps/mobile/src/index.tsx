import React, { FC } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import ButtonsContainer from 'components/ButtonsContainer'
import useLoadFonts from 'hooks/useLoadFonts'

const App: FC = () => {
  /**
   * Note: This is only needed for expo to recognize app fonts
   * This can be removed in a production build to save some initial
   * loading time.
   */
  const [loadingFonts] = useLoadFonts()
  if (loadingFonts)
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
