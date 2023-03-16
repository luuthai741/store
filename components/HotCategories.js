import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeartIcon } from "react-native-heroicons/solid";
const HotCategories = () => {
    return (
        <View className='mt-2'>
            <View className='flex flex-row items-center space-x-2 p-4'>
                <View className='h-1 flex-1 bg-gray-400' />
                <View className='flex flex-row justify-center items-center space-x-2'>
                    <HeartIcon color='gray' size={26} />
                    <Text className='text-center font-bold'>
                        DANH MỤC NỔI BẬT
                    </Text>
                </View>
                <View className='h-1 flex-1 bg-gray-400' />
            </View>
            <View className='flex p-4 space-y-2' >
                <TouchableOpacity>
                    <Image style={styles.imageCategory} source={{
                        uri: 'https://img.meta.com.vn/Data/image/2020/10/29/flash-sale-la-gi-9.jpg'
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.imageCategory} source={{
                        uri: 'https://thumbs.dreamstime.com/z/best-seller-banner-speech-bubble-label-sticker-ribbon-template-vector-stock-illustration-252915294.jpg'
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.imageCategory} source={{
                        uri: 'https://img.freepik.com/free-vector/new-arrival-collection-modern-banner-design_1017-36608.jpg?w=740&t=st=1678869475~exp=1678870075~hmac=67cc069777b2e5c83861c847f71b5776783d4d09bece08e1c9c9898851060bca'
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageCategory: {
        height: 250,
    }
})

export default HotCategories

