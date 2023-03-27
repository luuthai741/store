import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StarIcon as StarOutline } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { TextInput } from 'react-native';

const showRating = (starNumber, setStarNumber) => {
    let result = [];
    for (let i = 0; i < 5; i++) {
        if (i < starNumber) {
            result.push(<TouchableOpacity key={i} onPress={() => setStarNumber(i + 1)}><StarIcon key={i} color='orange' size={22} /></TouchableOpacity>);
        } else {
            result.push(<TouchableOpacity key={i} onPress={() => setStarNumber(i + 1)}><StarOutline key={i} color='orange' size={22} /></TouchableOpacity>);
        }
    }
    return result;
}

const ProductDetailCommentForm = () => {
    const [starNumber, setStarNumber] = useState(0);
    return (
        <View>
            <View className='p4' style={{ borderWidth: 2 }}>
                <Text className='font-bold p-4'>
                    THÊM ĐÁNH GIÁ
                </Text>
                <Text className='font-bold p-4'>
                    Đánh giá của bạn *
                </Text>
                <View className='flex-row ml-4'>
                    <View className='flex-row'>
                        {showRating(starNumber, setStarNumber)}
                    </View>
                </View>
                <Text className='font-bold p-4'>
                    Nhận xét của bạn *
                </Text>
                <View className='p2'>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        className='ml-4'
                        placeholder='Bạn có nhận xét gì về sản phẩm?'
                        style={{ borderWidth: 1, fontSize: 16, width: '90%', textAlignVertical: 'top' }} />
                </View>
                <Text className='font-bold p-4'>
                    Tên *
                </Text>
                <View className='p2'>
                    <TextInput
                        className='ml-4'
                        placeholder='Tên của bạn là ...'
                        style={{ borderWidth: 1, fontSize: 16, width: '90%', textAlignVertical: 'top' }} />
                </View>
                <Text className='font-bold p-4'>
                    Email *
                </Text>
                <View className='p2'>
                    <TextInput
                        className='ml-4 mb-4'
                        placeholder='Địa chỉ Email của bạn là ...'
                        style={{ borderWidth: 1, fontSize: 16, width: '90%', textAlignVertical: 'top' }} />
                </View>
                <View className='font-bold p-4 mb-8' >
                    <TouchableOpacity className='justify-center items-center' style={{ backgroundColor: 'black', height: 50, width: '26%' }}>
                        <Text className='font-bold text-white'>GỬI ĐI</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default ProductDetailCommentForm