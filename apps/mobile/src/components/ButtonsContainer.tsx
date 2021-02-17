import React, { FC } from 'react'
import { View } from 'react-native'
import { Button } from '@yourapp/ui'
import { StyleSheet } from 'react-native'

const ButtonsContainer: FC = () => {
  return (
    <View>
      <View style={styles.spacer} />
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
  )
}

export default ButtonsContainer

const styles = StyleSheet.create({
  spacer: {
    margin: 10,
  },
})
