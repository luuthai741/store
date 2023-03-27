import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native';

const SignInForm = () => {
    const [isChecked, setChecked] = useState(false);

    return (
        <View>
            <Text className='my-4'>ĐĂNG NHẬP</Text>
            <Text className='font-bold mb-2'>Tên tài khoản hoặc địa chỉ email *</Text>
            <TextInput
                className='mb-4'
                style={{ borderWidth: 1, fontSize: 16, borderColor: '#DDDDDD' }} />
            <Text className='font-bold mb-2'>Mật khẩu *</Text>
            <TextInput
                className='mb-4'
                style={{ borderWidth: 1, fontSize: 16, borderColor: '#DDDDDD' }} />
            <View className='flex-row justify-start items-center my-4'>
                <Checkbox className='mr-3'
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
                <Text className='font-bold'>Ghi nhớ mật khẩu</Text>
            </View>
            <TouchableOpacity className='bg-black w-1/3 h-12 justify-center items-center my-5'>
                <Text className='text-white font-bold'>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SignInForm