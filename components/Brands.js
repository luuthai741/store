import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
let brands = [
    {
        id: 1,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/187/187879.png'
    },
    {
        id: 2,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/187/187890.png'
    },
    {
        id: 3,
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/01/64/52/01/1000_F_164520108_RWfZILJYeJE1un52PhmLeKuNz20ImkS4.jpg'
    },
    {
        id: 4,
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/77/37/41/1000_F_377374146_mMLhcIfOx2VPI1Byo2CV7EB8erl5wdsY.jpg'
    }
];

const Brands = () => {
    const navigation = useNavigation();
    return (
        <View className='mt-10'>
            <View className='flex flex-row items-center space-x-2 p-4'>
                <View className='h-1 flex-1 bg-gray-400' />
                <View className='flex flex-row justify-center items-center space-x-2 border-2 border-gray-400'>
                    <Text className='text-center font-bold p-2'>
                        THƯƠNG HIỆU NỔI BẬT
                    </Text>
                </View>
                <View className='h-1 flex-1 bg-gray-400' />
            </View>
            <View className='flex items-center'>
                {
                    brands.map(brand => {
                        return (
                            <TouchableOpacity className='mt-5' key={brand.id}>
                                <Image className='h-20 w-20'
                                    source={{
                                        uri: brand.imageUrl
                                    }}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Brands