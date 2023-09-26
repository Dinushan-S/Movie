import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Cast({ cast, navigation }) {
    let personName = 'keanu Reevs';
    let charName = 'John wick'
    return (
        <View className="my-6">
            <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className="mr-4 item-center"
                            >
                                <View className="overflow-hidden rounded-full h-20 w-20 item-center border border-neutral-500">
                                    <Image
                                        className="rounded-2xl h-24 w-20"
                                        source={require('../assets/movie.jpg')}
                                        onProgress={() => navigation.navigate('person', person)}
                                    />
                                </View>

                                <Text className="text-white text-xs mt-1">
                                    {charName.length > 10 ? charName.slice(0, 10) + '...' : charName}
                                </Text>
                                <Text className="text-neutral-400 text-xs mt-1">
                                    {
                                        personName.length > 10 ? personName.slice(0, 10) + '...' : personName
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}