import { View, Text, Image } from 'react-native'
import React from 'react'
import { Bars3Icon, ShoppingBagIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CART_ROUTE } from '../constraints/routes';
import { Badge } from 'react-native-elements'

const Header = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View className='py-2 bg-black'>
                <Text className='text-center text-white'>
                    CHÀO MỪNG BẠN ĐẾN VỚI SHOP
                </Text>
            </View>
            <View className='flex-row justify-between items-center p-4'>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Bars3Icon size={40} color='gray' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image className='w-30 h-30' source={{ uri: 'assets:/logo-social.png' }} />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity className='flex-row justify-between items-center space-x-1' onPress={() => navigation.navigate(CART_ROUTE.name)}>
                        <View>
                            <ShoppingBagIcon color='gray' />
                            <Badge
                                status='error'
                                value={2}
                                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                            />
                        </View>
                        <Text>
                            Giỏ hàng/
                        </Text>
                        <Text className='font-bold'>
                            0đ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='items-center'>
                <View className='bg-gray-400 mt-1' style={{ height: 1, width: '90%' }} />
            </View>
        </View>
    )
}

export default Header