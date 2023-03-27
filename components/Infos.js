import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const infos = [
    {
        id: 1,
        title: 'Giới thiệu'
    },
    {
        id: 2,
        title: 'Special Deal (Ưu Đãi Hấp Dẫn)'
    },
    {
        id: 3,
        title: 'Coupons – Mã Giảm Giá'
    },
    {
        id: 4,
        title: 'Liên hệ'
    },
    {
        id: 5,
        title: 'Tuyển dụng'
    },
    {
        id: 6,
        title: 'Điều khoản sử dụng'
    },
    {
        id: 7,
        title: 'Tổng hợp những bài viết hay'
    }
]

const Infos = () => {
    return (
        <View className='flex justify-start space-y-2'>
            <Text className='font-bold text-xl'>THÔNG TIN</Text>
            <View className='h-1 w-[10vw] bg-green-500' />
            <View>
                {
                    infos.map(info => {
                        return (
                            <TouchableOpacity key={info.id} style={styles.underLine}>
                                <Text className='text-blue-500' style={{ fontSize: 16 }}>
                                    {info.title}
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
export default Infos