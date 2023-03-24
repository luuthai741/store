import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollViewBase, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { HandThumbUpIcon } from "react-native-heroicons/solid";
import { SocialIcon } from 'react-native-elements';
import { currencyFormatter, showRating } from '../utils/format';
import Header from '../components/Header';
import ProductDetailDescription from '../components/ProductDetailDescription';
import Footer from '../components/Footer';
import ProductDetailImage from '../components/ProductDetailImage';
import ProductDetailButton from '../components/ProductDetailButton';
import { SafeAreaView } from 'react-native';

const product = {
    id: 1,
    title: 'PRODUCT A',
    rating: 3,
    discountPercent: 4,
    price: 1200000,
    colors: ['Đen', 'Cầu vồng', 'Vàng', 'Bạc', 'Xanh', 'Đỏ'],
    quantity: 4,
    images: [
        'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Được biết đến là một trong những ông lớn trong ngành Box Mod, bởi thành công vang dội từ những đứa con tinh thần với công suất đỉnh cao như L200, S100,…. Thì tiếp đến mới đây, Geekvape lại tiếp tục cho ra mắt một sản phẩm Bod Mod thuộc serise Agise đó chính là Geekvape T200 Mod Kit Một em Vape vô cùng xịn sò từ công suất cho tới kiểu dàng, màu sắc vô cùng bắt mắt và thu hút. Hãy cùng Vape Chính Hãng tìm hiểu những tính năng vượt trội mà nhà Geek Vape đã gửi gắm vào em này nhé!',
    comments: [
        {
            'id': 1,
            'username': 'TLQ',
            'content': 'VIP',
            'rating': '5',
            'avatarUrl': null,
            'createdAt': '2022-03-01'
        },
        {
            'id': 2,
            'username': 'TLQ',
            'content': 'VIP',
            'rating': '1',
            'avatarUrl': null,
            'createdAt': '2022-03-01'
        },
        {
            'id': 3,
            'username': 'TLQ',
            'content': 'VIP VIPVIPVIPVIPVIPVIPVIPVIPVIPVIPVIPVIPVIPVIPVIPVIP',
            'rating': '3',
            'avatarUrl': null,
            'createdAt': '2022-03-01'
        },
        {
            'id': 4,
            'username': 'TLQ',
            'content': 'VIP',
            'rating': '2',
            'avatarUrl': 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
            'createdAt': '2022-03-01'
        },
        {
            'id': 5,
            'username': 'TLQ',
            'content': 'VIP',
            'rating': '4',
            'avatarUrl': 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
            'createdAt': '2022-03-01'
        },
    ],
    score: 22,
    likeQuantity: 5,
    brand: 'ITALIA'
}

const ProductDetailScreen = () => {
    console.log("re-render detail");
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <View className='p-4'>
                    <ProductDetailImage images={product.images} discountPercent={product.discountPercent} />
                    <Text className='text-lg font-bold'>{product.title}</Text>
                    <View className='flex flex-row'>
                        {showRating(product.rating)}
                    </View>
                    <View className='h-1 w-[10vw] bg-green-500 my-2' />
                    <TouchableOpacity>
                        <Text className='text-blue-400'>({product.comments.length} đánh giá của khách hàng)</Text>
                    </TouchableOpacity>
                    <View className='flex-row space-x-2 my-2'>
                        <TouchableOpacity className='p-2' style={[styles.borderButton, { borderWidth: 0 }]}>
                            <Text className='text-white' style={{ fontSize: 12 }}>
                                <HandThumbUpIcon color={'white'} size={12} />
                                Thích {product.likeQuantity}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='p-2' style={[styles.borderButton, { borderWidth: 0 }]}>
                            <Text className='text-white' style={{ fontSize: 12 }}>Chia sẻ</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row space-x-2 my-1'>
                        {product.discountPercent > 0 ? (
                            <>
                                <Text className='text-gray-500 line-through font-bold' style={{ fontSize: 22 }}>
                                    {currencyFormatter(product.price)}
                                </Text>
                                <Text className='font-bold' style={{ fontSize: 22 }}>
                                    {currencyFormatter(product.price - (product.price * product.discountPercent / 100))}
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text className='font-bold'>
                                    {currencyFormatter(product.price)}
                                </Text>
                            </>
                        )}
                    </View>
                    <Text>
                        Nếu mua sản phẩm này bạn sẽ tích lũy được {product.score} "Điểm" Tương ứng 44.000₫!
                    </Text>
                    <ProductDetailButton colors={product.colors} productQuantity={product.quantity} />
                    <View>
                        <Text>
                            Muốn chiết khấu. Hãy là một thành viên!
                        </Text>
                        <View className='flex-row'>
                            <SocialIcon
                                type='facebook'
                                style={styles.socialNode}
                            />
                            <SocialIcon
                                type='twitter'
                                style={styles.socialNode}
                            />
                            <SocialIcon
                                type='pinterest'
                                style={styles.socialNode}
                            />
                            <SocialIcon
                                type='linkedin'
                                style={styles.socialNode}
                            />
                            <SocialIcon
                                type='tumblr'
                                style={styles.socialNode}
                            />
                        </View>
                    </View>
                    <ProductDetailDescription product={product} />
                </View >
                <Footer />
            </ScrollView >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    borderButton: {
        borderColor: '#1877F2',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#1877F2',
        backgroundColor: '#1877F2',
    },
    socialNode: {
        width: 40,
        height: 40
    }
})
export default ProductDetailScreen