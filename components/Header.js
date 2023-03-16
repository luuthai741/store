import { View, Text, Image } from 'react-native'
import React from 'react'
import { Bars3Icon, ShoppingBagIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from 'react-native';
const Header = () => {
    return (
        <View>
            <View className='py-2 bg-black'>
                <Text className='text-center text-white'>
                    CHÀO MỪNG BẠN ĐẾN VỚI SHOP
                </Text>
            </View>
            <View className='flex flex-row justify-between items-center p-4'>
                <TouchableOpacity>
                    <Bars3Icon size={30} color='gray' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image className='w-30 h-30' source={{ uri: 'assets:/logo-social.png' }} />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity className='flex flex-row justify-between items-center space-x-1'>
                        <ShoppingBagIcon color='gray' />
                        <Text>
                            Giỏ hàng/
                        </Text>
                        <Text className='font-bold'>
                            0đ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header