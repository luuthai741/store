import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const SignUpForm = () => {
    return (
        <View>
            <Text className='my-4'>ĐĂNG KÝ</Text>
            <Text className='font-bold mb-2'>Địa chỉ email *</Text>
            <TextInput
                className='mb-4'
                style={{ borderWidth: 1, fontSize: 16, borderColor: '#DDDDDD' }} />
            <Text className='font-bold mb-2'>Mật khẩu *</Text>
            <TextInput
                className='mb-4'
                style={{ borderWidth: 1, fontSize: 16, borderColor: '#DDDDDD' }} />
            <View className='flex-row justify-start items-center my-4'>
                <Text>
                    Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trải nghiệm của bạn trên toàn bộ website của chúng tôi, bạn có thể xem chi tiết tại:
                    <Text className='text-blue-400'> chính sách riêng tư.</Text>
                </Text>
            </View>
            <TouchableOpacity className='bg-black w-1/3 h-12 justify-center items-center my-5'>
                <Text className='text-white font-bold'>ĐĂNG KÝ</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpForm