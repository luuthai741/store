import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const supports = [
    {
        id: 1,
        title: 'Vận chuyển & xử lý đơn hàng'
    },
    {
        id: 2,
        title: 'Chính sách đổi trả'
    },
    {
        id: 3,
        title: 'Phương thức thanh toán'
    },
    {
        id: 4,
        title: 'FQA – Câu hỏi thường gặp'
    },
    {
        id: 5,
        title: 'Chính Sách Bảo Mật'
    },
    {
        id: 6,
        title: 'Chính sách về độ tuổi'
    },
]

const Supports = () => {
    return (
        <View className='flex justify-start space-y-2'>
            <Text className='font-bold text-xl'>HỖ TRỢ?</Text>
            <View className='h-1 w-[10vw] bg-green-500' />
            <View>
                {
                    supports.map(support => {
                        return (
                            <TouchableOpacity key={support.id} style={styles.underLine}>
                                <Text className='text-blue-500 text-lg'>
                                    {support.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    underLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})
export default Supports