import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MovieList({ title, data }) {
    return (
        <View className="mb-8 space-y-4">
            <View className='mx-4 flex-row justify-between items-center'>
                <Text className="text-white text-xl">{title}</Text>
                <TouchableOpacity>
                    <Text>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}