import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text className="text-red-500 text-4xl">HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flext: 1,
        alignItems: 'center',
    }
})
