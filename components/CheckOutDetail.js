import { View, Text } from 'react-native'
import React from 'react'
import CheckOutForm from './CheckOutForm'

const CheckOutDetail = () => {
    return (
        <View className='p-4'>
            <View className='m-6'>
                <Text className='text-center text-lg'>CHI TIẾT THANH TOÁN</Text>
            </View>
            <CheckOutForm />
        </View>
    )
}

export default CheckOutDetail