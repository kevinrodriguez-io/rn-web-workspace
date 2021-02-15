import React, { FC, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Button } from '@yourapp/ui'
import { loadAsync } from 'expo-font'
import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans'
import { useState } from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={styles.spacer} />
      <View>
        <Button onPress={() => alert('Test')}>Primary</Button>
        <View style={styles.spacer} />
        <Button variant="SECONDARY" onPress={() => alert('Test')}>
          Secondary
        </Button>
        <View style={styles.spacer} />
        <Button disabled onPress={() => alert('Test')}>
          Disabled
        </Button>
      </View>
    </View>
  )
}

const AppWrapper: FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    ;(async () => {
      try {
        await loadAsync({
          OpenSans_300Light,
          OpenSans_400Regular,
          OpenSans_600SemiBold,
          OpenSans_700Bold,
        })
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])
  if (error) {
    return (
      <View style={styles.container}>{JSON.stringify(error, null, 2)}</View>
    )
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
  return <App />
}

export default AppWrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    margin: 10,
  },
})
