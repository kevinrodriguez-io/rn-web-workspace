import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@yourapp/ui'

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
