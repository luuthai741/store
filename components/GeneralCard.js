import { View, Text } from 'react-native'
import React from 'react'
import { StarIcon as StarOutline } from "react-native-heroicons/solid";
import { StarIcon } from "react-native-heroicons/mini";

const showRating = rating => {
    for (let i = 0; i < 5; i++) {
        if (i <= rating) {

        } else {

        }
    }
}

const GeneralCard = ({ data }) => {
    return (
        <View className='flex-1 flex justify-center items-center'>
            <Text className='text-center'>{data?.title}</Text>
            {data?.rating.map(item => {
                return <StarIcon color='orange' size={22} />
            })}
            {(5 - data?.rating).map(item => {
                return <StarOutline color='orange' size={22} />
            })}
        </View>
    )
}

export default GeneralCard