import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Button, useUIFonts } from '@yourapp/ui'
import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans'

export default function App() {
  const [loading, error] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  })
  if (error) {
    return (
      <View style={styles.container}>{JSON.stringify(error, null, 2)}</View>
    )
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Button onPress={() => alert('Test')}>Primary</Button>
          <Button variant="SECONDARY" onPress={() => alert('Test')}>
            Secondary
          </Button>
          <Button disabled onPress={() => alert('Test')}>
            Disabled
          </Button>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
