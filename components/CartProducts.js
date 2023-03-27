import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { currencyFormatter } from '../utils/format'
import { ArrowLeftIcon, TagIcon } from "react-native-heroicons/solid";
import { CHECK_OUT_ROUTE, HOME_ROUTE } from '../constraints/routes';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

let products = [
    {
        id: 1,
        title: 'PRODUCT A',
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        score: 22,
        brand: 'ITALIA',
        quantity: 1
    },
    {
        id: 2,
        title: 'PRODUCT B',
        price: 500000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        score: 16,
        brand: 'ITALIA',
        quantity: 2
    },
]

const shippingPrice = 30000;

const totalPrice = (products) => {
    let result = 0;
    if (!products || products.length == 0) {
        return result;
    }
    products.forEach(product => {
        result += product.price * product.quantity;
    });
    return result;
}

const showProducts = products => {
    if (!products || products.length == 0) {
        return (
            <Text className='font-bold items-center text-center text-lg'>
                Chưa có sản phẩm nào trong giỏ hàng
            </Text>
        )
    }
    return products.map((product, index) => {
        return (
            <View key={product.id}>
                <View className='flex-row'>
                    <View className='flex-row justify-between items-center' style={styles.contentArea}>
                        <Image
                            className='h-20 w-20'
                            source={{
                                uri: product.imageUrl
                            }} />
                        <View>
                            <TouchableOpacity>
                                <Text className='text-blue-400'>{product.title}</Text>
                            </TouchableOpacity>
                            <Text className='text-gray-300'>
                                THƯƠNG HIỆU: {product.brand}
                            </Text>
                            <Text clasName='text-gray-300'>
                                {product.quantity} x <Text className='font-bold'>{currencyFormatter(product.price)}</Text>
                            </Text>
                        </View>
                    </View>
                    <View className='justify-center items-end' style={styles.quantityArea}>
                        <View className='flex-row items-center '>
                            <TouchableOpacity className='justify-center items-center' onPress={() => { }}>
                                <View className='justify-center items-center p-2 w-6' style={{ borderColor: '#8F8F8F', borderWidth: 1, borderRightWidth: 0 }}>
                                    <Text className='font-bold'>-</Text>
                                </View>
                            </TouchableOpacity>
                            <Text className='py-2 px-3' style={{ borderColor: '#8F8F8F', borderWidth: 1 }}>{product.quantity}</Text>
                            <TouchableOpacity className='justify-center items-center' onPress={() => { }}>
                                <View className='justify-center items-center p-2 w-6' style={{ borderColor: '#8F8F8F', borderWidth: 1, borderLeftWidth: 0 }}>
                                    <Text className='font-bold'>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View className='bg-gray-300 mt-1' style={{ height: 1 }} />
            </View>
        )
    })
}
const CartProducts = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>
                Tiến hành thanh toán ngay,
                bạn sẽ nhận được 1 (Điểm) tương đương với 2.000₫!
            </Text>
            <View className='my-4'>
                <View className='flex-row justify-between mb-4'>
                    <Text className='font-bold' style={styles.contentArea}>SẢN PHẨM</Text>
                    <Text className='font-bold text-right' style={styles.quantityArea}>SỐ LƯỢNG</Text>
                </View>
                <View className='bg-gray-300' style={{ height: 3 }} />
                <View className='space-y-2'>
                    {showProducts(products)}
                    <TouchableOpacity className='mt-2' onPress={() => navigation.navigate(HOME_ROUTE.name)}>
                        <View className='flex-row justify-center items-center' style={styles.borderButton}>
                            <ArrowLeftIcon size={18} color={'black'} />
                            <Text>TIẾP TỤC XEM SẢN PHẨM</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='mt-4'>
                <View className='flex-row justify-between mb-4'>
                    <Text className='font-bold' style={styles.contentArea}>CỘNG GIỎ HÀNG</Text>
                </View>
                <View className='bg-gray-300' style={{ height: 3 }} />
                <View className='space-y-2'>
                    <View className='flex-row justify-between mb-4'>
                        <Text style={styles.quantityArea}>Tạm tính</Text>
                        <Text className='font-bold text-right' style={styles.contentArea}>{currencyFormatter(totalPrice(products))}</Text>
                    </View>
                    <View className='bg-gray-300 mt-1' style={{ height: 1 }} />
                    <View className='flex-row justify-between mb-4'>
                        <Text className='text-gray-400' style={styles.quantityArea}>Giao hàng</Text>
                        <View className='justify-end items-end' style={styles.contentArea}>
                            <Text clasName='text-right'>
                                Ship vận chuyển: {currencyFormatter(shippingPrice)}
                            </Text>
                            <Text clasName='text-right'>
                                Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh toán.
                            </Text>
                        </View>
                    </View>
                    <View className='bg-gray-300 mt-1' style={{ height: 1 }} />
                    <View className='flex-row justify-between mb-4'>
                        <Text className='font-bold' style={styles.quantityArea}>Tổng</Text>
                        <Text className='font-bold text-right' style={styles.contentArea}>{currencyFormatter(totalPrice(products) + shippingPrice)}</Text>
                    </View>
                </View>
                <View className='bg-gray-300' style={{ height: 3 }} />
            </View>
            <TouchableOpacity className='h-14 justify-center bg-red-500 mt-6' onPress={() => navigation.navigate(CHECK_OUT_ROUTE.name)}>
                <Text className='font-bold text-white text-center'>TIẾN HÀNH THANH TOÁN</Text>
            </TouchableOpacity>
            <View className='mt-5'>
                <View className='flex-row space-x-2'>
                    <TagIcon color={'black'} size={22} />
                    <Text className='font-bold'>Mã ưu đãi</Text>
                </View>
                <View className='bg-gray-300 my-5' style={{ height: 3 }} />
                <TextInput
                    placeholder='Mã ưu đãi'
                    style={{ borderWidth: 1, borderColor: '#DDDDDD', fontSize: 16 }} />
                <TextInput />
                <TouchableOpacity className='h-14 justify-center bg-gray-200 mt-2'>
                    <Text className='text-center'>Áp dụng</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentArea: {
        width: '70%'
    },
    quantityArea: {
        width: '30%'
    },
    borderButton: {
        borderWidth: 2,
        borderColor: 'black',
        width: 220,
        height: 50
    },
})
export default CartProducts