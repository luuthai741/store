import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { currencyFormatter } from '../utils/format'
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
const CheckOutForm = () => {
    return (
        <View>
            <Text className='font-bold'>THÔNG TIN THANH TOÁN</Text>
            <TextInput
                className='mb-4'
                placeholder='Họ & Tên'
                style={{ borderWidth: 1, fontSize: 16, borderColor: '#DDDDDD' }} />
            <TextInput
                className='mb-4'
                placeholder='Vui lòng nhập chính xác số điện thoại'
                style={{ borderWidth: 1, fontSize: 16, borderColor: '#DDDDDD' }} />
            <TextInput
                className='mb-4'
                placeholder='Địa chỉ Email'
                style={{ borderWidth: 1, fontSize: 16, borderColor: '#DDDDDD' }} />
            <TextInput
                className='mb-4'
                placeholder='Địa chỉ'
                style={{ borderWidth: 1, fontSize: 16, borderColor: '#DDDDDD' }} />
            <View style={{ borderWidth: 1 }}>
                <View className='p-4'>
                    <Text className='font-bold mb-4'>ĐƠN HÀNG CỦA BẠN</Text>
                    <View className='flex-row justify-between my-2'>
                        <Text className='font-bold' style={styles.contentArea}>SẢN PHẨM</Text>
                        <Text className='font-bold text-right' style={styles.quantityArea}>TẠM TÍNH</Text>
                    </View>
                    <View className='bg-gray-300 mt-1' style={{ height: 3 }} />
                    <View className='flex-row justify-between my-2'>
                        <Text style={styles.quantityArea}>Tạm tính</Text>
                        <Text className='font-bold text-right' style={styles.contentArea}>{currencyFormatter(totalPrice(products))}</Text>
                    </View>
                    <View className='bg-gray-300 mt-1' style={{ height: 1 }} />
                    <View className='flex-row justify-between my-2'>
                        <Text className='text-gray-300' style={styles.quantityArea}>Giao hàng</Text>
                        <Text className='text-right' style={styles.contentArea}>Ship vận chuyển: {currencyFormatter(shippingPrice)}</Text>
                    </View>
                    <View className='bg-gray-300 mt-1' style={{ height: 1 }} />
                    <View className='flex-row justify-between my-2'>
                        <Text className='font-bold' style={styles.quantityArea}>Tổng</Text>
                        <Text className='font-bold first-line:text-right' style={styles.contentArea}>{currencyFormatter(totalPrice(products) + + shippingPrice)}</Text>
                    </View>
                    <View className='bg-gray-300 mt-1' style={{ height: 3 }} />
                    <View className='mt-5'>
                        <Text className='font-bold'>Thanh toán khi nhận hàng</Text>
                        <Text>
                            – Bạn hãy kiễm tra lại thông tin và SĐT trước khi xác nhận đặt hàng, nếu sai SĐT đơn hàng của bạn sẻ bị hủy, cảm ơn bạn đã chọn chúng tôi.
                        </Text>
                    </View>
                    <TouchableOpacity className='bg-red-500 w-1/3 h-12 justify-center items-center my-5'>
                        <Text className='text-white font-bold'>ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                    <Text>
                        Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trải nghiệm của bạn trên toàn bộ website của chúng tôi, bạn có thể xem chi tiết tại:
                        <Text className='text-blue-400'> chính sách riêng tư.</Text>
                    </Text>
                </View>

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
export default CheckOutForm