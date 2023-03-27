import { View, Text } from 'react-native'
import React from 'react'
import CartProducts from './CartProducts'

const CartDetails = () => {
    return (
        <View className='p-4'>
            <View className='m-6'>
                <Text className='text-center text-lg'>GIỎ HÀNG</Text>
            </View>
            <CartProducts />
        </View>
    )
}

export default CartDetails