import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { currencyFormatter, dateFormatter, showRating } from '../utils/format'
import { GlobeAltIcon, CheckBadgeIcon, FlagIcon, ArrowPathIcon, ArrowsRightLeftIcon } from "react-native-heroicons/solid";
import { TextInput } from 'react-native';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const showColorsText = (colors) => {
    if (!colors || colors.length <= 0) {
        return "";
    }
    let result = "";
    for (let index = 0; index < colors.length; index++) {
        result += colors[index];
        if (index < colors.length - 1) {
            result += ', ';
        }
    }
    return result;
}

const showComment = (comments) => {
    if (!comments || comments.length <= 0) {
        return (
            <Text>Sản phẩm chưa có bình luận nào</Text>
        )
    }
    return comments.map((comment) => {
        return (
            <View>
                <View className='flex-row p-4 space-x-4'>
                    <View style={{ width: '30%' }}>
                        <Image className='w-16 h-16 rounded-full' source={{
                            uri: !comment.avatarUrl
                                ? 'https://i.stack.imgur.com/l60Hf.png'
                                : comment.avatarUrl
                        }} />
                    </View>
                    <View style={{ width: '70%' }}>
                        <View className='flex-row'>
                            {showRating(comment.rating)}
                        </View>
                        <Text>
                            <Text className='font-bold'>{comment.username}</Text> - {dateFormatter(comment.createdAt)}
                        </Text>
                        <Text className='italic'>
                            {comment.content}
                        </Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray' }} />
            </View>
        )
    })
}

const ProductDetailDescription = ({ product }) => {
    const [activeDescription, setActiveDescription] = useState(0);
    return (
        <View className=''>
            <TouchableOpacity className='bg-gray-100 justify-center' style={[styles.descriptionButton, activeDescription != 0 ? { borderTopColor: 'gray', borderTopWidth: 2 } : null, activeDescription == 0 ? styles.activeButtonBorder : null]} onPress={() => setActiveDescription(0)}>
                <Text className='pl-4'>MÔ TẢ</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-200 justify-center' style={[styles.descriptionButton, activeDescription == 1 ? styles.activeButtonBorder : null]} onPress={() => setActiveDescription(1)}>
                <Text className='pl-4'>THÔNG TIN BỔ SUNG</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-200 justify-center' style={[styles.descriptionButton, activeDescription == 2 ? styles.activeButtonBorder : null]} onPress={() => setActiveDescription(2)}>
                <Text className='pl-4'>CHÍNH SÁCH TỐT NHẤT</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-200 justify-center' style={[styles.descriptionButton, activeDescription == 3 ? styles.activeButtonBorder : null]} onPress={() => setActiveDescription(3)}>
                <Text className='pl-4'>ĐÁNH GIÁ ({product.comments.length})</Text>
            </TouchableOpacity>
            <View className='p-4'>
                {activeDescription == 0 && (
                    <>
                        <Text className='text-center font-bold text-lg'>
                            {product.title}
                        </Text>
                        <Text>
                            {product.description}
                        </Text>
                    </>
                )}
                {activeDescription == 1 && (
                    <View>
                        <View className='flex-row items-center py-1'>
                            <Text className='font-bold' style={{ width: '36%' }}>GIÁ</Text>
                            <Text className='text-gray-400' style={{ width: '64%' }}>{currencyFormatter(product.price)}</Text>
                        </View>
                        <View className='bg-gray-400' style={{ height: 1 }} />
                        <View className='flex-row items-center py-1'>
                            <Text className='font-bold' style={{ width: '36%' }}>MÀU SẮC</Text>
                            <Text className='text-gray-400' style={{ width: '64%' }}>
                                {showColorsText(product.colors)}
                            </Text>
                        </View>
                        <View className='bg-gray-400' style={{ height: 1 }} />
                        <View className='flex-row items-center py-1'>
                            <Text className='font-bold' style={{ width: '36%' }}>THƯƠNG HIỆU</Text>
                            <Text className='text-gray-400' style={{ width: '64%' }}>{product.brand}</Text>
                        </View>
                        <View className='bg-gray-400' style={{ height: 1 }} />
                    </View>
                )}
                {activeDescription == 2 && (
                    <>
                        <Text className='font-bold text-lg'>
                            Mua sản phẩm tại Shop với Chính Sách Bán Hàng Tốt Nhất
                        </Text>
                        <View className='space-y-2'>
                            <View className='flex-row space-x-2 items-center'>
                                <GlobeAltIcon color={'black'} size={22} />
                                <Text>
                                    Ship cod toàn quốc.
                                </Text>
                            </View>
                            <View className='flex-row space-x-2 items-center just'>
                                <FlagIcon color={'black'} size={22} />
                                <Text>
                                    Free ship với đơn hàng trên 1.000k.
                                </Text>
                            </View>
                            <View className='flex-row space-x-2 items-center'>
                                <ArrowsRightLeftIcon color={'black'} size={22} />
                                <Text>
                                    Được kiểm tra hàng khi thanh toán.
                                </Text>
                            </View>
                            <View className='flex-row space-x-2 items-center'>
                                <ArrowPathIcon color={'black'} size={22} />
                                <Text>
                                    Đổi trả 7 ngày.
                                </Text>
                            </View>
                            <View className='flex-row space-x-2 items-center'>
                                <CheckBadgeIcon color={'black'} size={22} />
                                <Text>
                                    Bảo hàng 3 tháng
                                </Text>
                            </View>
                        </View>
                    </>
                )}
                {activeDescription == 3 && (
                    <View>
                        {showComment(product.comments)}
                        <View className='p4' style={{ borderWidth: 2 }}>
                            <Text className='font-bold p-4'>
                                THÊM ĐÁNH GIÁ
                            </Text>
                            <Text className='font-bold p-4'>
                                Đánh giá của bạn *
                            </Text>
                            <View className='flex-row ml-4'>
                                {showRating(0)}
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
                )}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    descriptionButton: {
        width: '100%',
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderLeftColor: 'gray',
        borderRightWidth: 2,
        borderRightColor: 'gray',
    },
    activeButtonBorder: {
        borderTopColor: '"black"',
        borderTopWidth: 2
    },
    // avatar: {
    //     width: 50,
    //     heigh: 50,
    //     borderRadius: 
    // }
})
export default ProductDetailDescription