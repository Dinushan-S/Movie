import { View, Text, Dimensions, Platform, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/outline';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function Search() {
    return (
        <SafeAreaView className="bg-neutral-800 flex-1">
            <View
                className="mx-4 mb-4 flex-row justify-between item-center border border-neutral-500 rounded-full"
            >
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    className='pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider'
                />
                <TouchableOpacity
                    onPress={() => { }}
                    className="rounded-full p-2 m-1 bg-neutral-500"
                >
                    <XMarkIcon size={25} color={'white'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}