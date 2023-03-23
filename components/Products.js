import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import GeneralCard from './GeneralCard';
let devices = [
    {
        id: 1,
        title: 'PRODUCT A',
        rating: 3,
        discountPercent: 4,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 1
    },
    {
        id: 2,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 3,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 4,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 5,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 6,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 7,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 9,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 10,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 11,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 12,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 13,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 14,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 15,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
]

const renderItem = ({ item }) => {
    return (
        <View style={{ width: '44%' }}>
            <GeneralCard key={item.id} data={item} />
        </View>
    )
}

const Products = ({ data }) => {
    return (
        <View>
            <View className='flex-row flex-wrap p-4 justify-center items-center'>
                {devices.map(device => {
                    return (
                        <View style={{ width: '44%' }}>
                            <GeneralCard key={device.id} data={device} />
                        </View>
                    )
                })}
                <FlatList
                    data={devices}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
            <ActivityIndicator size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap'
    },
})
export default Products