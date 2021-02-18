import React, { FC } from 'react'
import { Text, StyleSheet } from 'react-native'

const someTextStyles = StyleSheet.create({
  someText: {
    color: 'red',
    fontWeight: '800',
  },
})

export const SomeText: FC = ({ children }) => (
  <Text style={someTextStyles.someText}>{children}</Text>
)
