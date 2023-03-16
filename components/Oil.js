import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Node from './Node';
import GeneralCard from './GeneralCard';
import SeeMoreButton from './SeeMoreButton';
import { ScrollView } from 'react-native';
let oilCategories = [
    {
        id: 1,
        title: 'MALAYSIA'
    },
    {
        id: 2,
        title: 'US/UK'
    },
    {
        id: 3,
        title: 'SALT NIC CAO'
    },
];

let oils = [
    {
        id: 1,
        title: 'OIL A',
        rating: 2,
        discountPercent: 9,
        price: 340000,
        imageUrl: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 1
    },
    {
        id: 2,
        title: 'OIL B',
        rating: 1,
        discountPercent: 9,
        price: 350000,
        imageUrl: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 1
    },
    {
        id: 3,
        title: 'OIL C',
        rating: 2,
        discountPercent: 0,
        price: 370000,
        imageUrl: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 4,
        title: 'OIL D',
        rating: 3,
        discountPercent: 15,
        price: 369000,
        imageUrl: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 5,
        title: 'OIL E',
        rating: 4,
        discountPercent: 12,
        price: 250000,
        imageUrl: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 3
    },
    {
        id: 6,
        title: 'OIL F',
        rating: 1,
        discountPercent: 10,
        price: 359000,
        imageUrl: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 3
    },
    {
        id: 7,
        title: 'OIL A',
        rating: 2,
        discountPercent: 9,
        price: 340000,
        imageUrl: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 3
    },
    {
        id: 8,
        title: 'OIL B',
        rating: 1,
        discountPercent: 9,
        price: 340000,
        imageUrl: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 3
    },
    {
        id: 9,
        title: 'OIL A',
        rating: 2,
        discountPercent: 0,
        price: 340000,
        imageUrl: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 3
    },
    {
        id: 10,
        title: 'OIL B',
        rating: 1,
        discountPercent: 9,
        price: 340000,
        imageUrl: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 3
    },
]


const Oil = () => {
    const [isSelectedOil, setIsSelectedOil] = useState(null);
    const [oilsSelected, setOilsSelected] = useState([]);

    useEffect(() => {
        let newOils = oils.filter(oid => oid.categoryId == isSelectedOil);
        setOilsSelected(newOils);
    }, [isSelectedOil])

    return (
        <View className='mt-2'>
            <Text className='text-center font-bold'>THIẾT BỊ (BỘ DỤNG CỤ)</Text>
            <View className='flex flex-row justify-center items-center space-x-4 p-4'>
                {oilCategories.map(category => {
                    return <Node id={category.id} title={category.title} isSelected={isSelectedOil} setIsSelected={setIsSelectedOil} />
                })}
            </View >
            <View className='flex flex-row p-4'>
                <ScrollView horizontal accessible showsHorizontalScrollIndicator={false}>
                    {oilsSelected.map(oil => {
                        return <GeneralCard key={oid.id} data={oil} />
                    })}
                </ScrollView>
            </View>
            <SeeMoreButton pageName={'Home'} />
        </View >
    )
}

export default Oil