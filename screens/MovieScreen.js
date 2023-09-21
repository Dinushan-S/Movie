import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

var { width, height } = Dimensions.get('window');


export default function MovieScreen() {
    const { params: item } = useRoute();
    useEffect(() => {
        //call movie api
    }, [item]);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900"
        >
            {/* back button and movie poster */}
            <View className="w-full">
                <SafeAreaView className="absolute z-20 w-full flex-row justify-between item-center px-4">
                    <TouchableOpacity className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                        <Text className="text-white text-lg">Back</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>

        </ScrollView>
    )
}