import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
export default function Homelayout() {
  return (
    <Stack
    screenOptions={{
        headerShown: false
    }}
    >

    <Stack.Screen name='(tabs)'
      options={{
        headerShown:false
      }}
      />
      </Stack>
    
  )
}