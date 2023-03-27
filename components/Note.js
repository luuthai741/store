import { View, Text } from 'react-native'
import React from 'react'

const Note = () => {
    return (
        <View className='flex justify-start space-y-2'>
            <Text className='font-bold text-xl'>NGƯỜI MỚI NÊN ĐỌC TRƯỚC KHI MUA SẢN PHẨM CỦA CHÚNG TÔI</Text>
            <View className='h-1 w-[10vw] bg-green-500' />
            <View>
                <Text style={{ fontSize: 16 }}>
                    Sản phẩm tại website này không dành cho trẻ vị thành niên và chỉ dành cho những người trên 18 tuổi. Bạn phải đủ tuổi hợp pháp tại Việt Nam mới mua được sản phẩm này. Sản phẩm này không nên uống và hãy tránh xa tầm tay trẻ em, vật nuôi trong quá trình sử dụng. Hãy đọc trang điều khoản và điều kiện của chúng tôi trước khi mua sản phẩm!
                </Text>
            </View>
        </View>
    )
}

export default Note