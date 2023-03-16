import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon as StarOutline } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { currencyFormatter } from '../utils/format';
import { Image } from 'react-native';

const showRating = rating => {
    let result = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            result.push(<StarIcon key={i} color='orange' size={22} />);
        } else {
            result.push(<StarOutline key={i} color='orange' size={22} />);
        }
    }
    return result;
}

const GeneralCard = ({ data }) => {
    return (
        <View className='flex-1 flex justify-center items-center'>
            <TouchableOpacity className='relative flex justify-center'>
                {data.discountPercent > 0 ? (
                    <View className='absolute flex justify-center items-center z-10 bg-red-500 w-10 h-10 rounded-full'>
                        <Text className='text-white'>-{data.discountPercent}%</Text>
                    </View>
                ) : null}
                <Image className='h-40 w-40'
                    source={{
                        uri: data.imageUrl
                    }}
                />
            </TouchableOpacity>
            <View className='flex flex-row'>
                {showRating(data?.rating)}
            </View>
            <Text className='text-center'>{data?.title}</Text>
            <View className='flex flex-row space-x-2'>
                {data.discountPercent > 0 ? (
                    <>
                        <Text className='text-gray-500 line-through font-bold'>
                            {currencyFormatter(data.price)}
                        </Text>
                        <Text className='font-bold'>
                            {currencyFormatter(data.price - (data.price * data.discountPercent / 100))}
                        </Text>
                    </>
                ) : (
                    <>
                        <Text className='font-bold'>
                            {currencyFormatter(data.price)}
                        </Text>
                    </>
                )}
            </View>
        </View>
    )
}

export default GeneralCard