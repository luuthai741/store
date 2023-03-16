import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Node from './Node';
import GeneralCard from './GeneralCard';
import SeeMoreButton from './SeeMoreButton';
let tankCategories = [
    {
        id: 1,
        title: 'RDA'
    },
    {
        id: 2,
        title: 'SUB OHM TANK'
    },
    {
        id: 3,
        title: 'RTA & RDTA'
    }
];
let tanks = [
    {
        id: 1,
        title: 'TANK A',
        rating: 3,
        discountPercent: 19,
        price: 800000,
        imageUrl: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 1
    },
    {
        id: 2,
        title: 'TANK B',
        rating: 4,
        discountPercent: 15,
        price: 650000,
        imageUrl: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
]


const Tank = () => {
    const [isSelectedTank, setIsSelectedTank] = useState(null);
    const [tanksSelected, setTanksSelected] = useState([]);

    useEffect(() => {
        let newTanks = tanks.filter(tank => tank.categoryId == isSelectedTank);
        setTanksSelected(newTanks);
    }, [isSelectedTank])

    return (
        <View className='mt-2'>
            <Text className='text-center font-bold'>THIẾT BỊ (BỘ DỤNG CỤ)</Text>
            <View className='flex flex-row justify-center items-center space-x-4 p-4'>
                {tankCategories.map(device => {
                    return <Node id={device.id} title={device.title} isSelected={isSelectedTank} setIsSelected={setIsSelectedTank} />
                })}
            </View >
            <View className='flex flex-row p-4'>
                <ScrollView horizontal accessible showsHorizontalScrollIndicator={false}>
                    {tanksSelected.map(tank => {
                        return <GeneralCard key={tank.id} data={tank} />
                    })}
                </ScrollView>
            </View>
            <SeeMoreButton pageName={'Home'} />
        </View >
    )
}

export default Tank