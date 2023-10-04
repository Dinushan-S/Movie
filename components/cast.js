import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { img185 } from '../api/moviedb';

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
                                onPress={() => navigation.navigate('Person', person)}
                            >
                                <View className="overflow-hidden rounded-full h-20 w-20 item-center border border-neutral-500">
                                    <Image
                                        className="rounded-2xl h-24 w-20"
                                        // source={require('../assets/movie.jpg')}
                                        source={{ uri: img185(person.profile_path) }}
                                    />
                                </View>

                                <Text className="text-white text-xs mt-1">
                                    {person.name.length > 10 ? person.name.slice(0, 10) + '...' : person.name}
                                </Text>
                                <Text className="text-neutral-400 text-xs mt-1">
                                    {
                                        person.character.length > 10 ? person.character.slice(0, 10) + '...' : person.character
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