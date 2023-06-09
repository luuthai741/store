import { View, Text, Image } from 'react-native'
import React from 'react'
import Supports from './Supports'
import Infos from './Infos'
import Map from './Map'
import Note from './Note'

const Footer = () => {
    return (
        <View className='mt-10 p-4'>
            <View>
                <View className='bg-gray-300 my-2' style={{ height: 2 }} />
                <Supports />
                <Infos />
                <Map />
                <Note />
                <Image className='h-[10vh] w-[100vw] flex items-center'
                    source={{
                        uri: 'https://vapechinhhang.com/wp-content/uploads/2018/12/phuong-thuc-thanh-toan.jpg'
                    }}
                />
                <Text className='text-center'>
                    Copyright 2016 - 2023 ©
                    <Text className='font-bold'>
                        FAKE.COM
                    </Text>
                </Text>
            </View>
        </View>
    )
}

export default Footer