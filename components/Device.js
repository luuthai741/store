import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Node from './Node';
import GeneralCard from './GeneralCard';
import SeeMoreButton from './SeeMoreButton';
let deviceCategories = [
    {
        id: 1,
        title: 'KIT'
    },
    {
        id: 2,
        title: 'SYSTEM'
    },
    {
        id: 3,
        title: 'BOX MOD'
    },
    {
        id: 4,
        title: 'ONE TIME'
    }
];
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
]


const Device = () => {
    const [isSelectedDevice, setIsSelectedDevice] = useState(null);
    const [devicesSelected, setDevicesSelected] = useState([]);

    useEffect(() => {
        let newDevices = devices.filter(device => device.categoryId == isSelectedDevice);
        setDevicesSelected(newDevices);
    }, [isSelectedDevice])

    return (
        <View>
            <Text className='text-center font-bold'>THIẾT BỊ (BỘ DỤNG CỤ)</Text>
            <View className='flex flex-row justify-center items-center space-x-4 p-4'>
                {deviceCategories.map(device => {
                    return <Node id={device.id} title={device.title} isSelected={isSelectedDevice} setIsSelected={setIsSelectedDevice} />
                })}
            </View >
            <View className='flex flex-row p-4'>
                <ScrollView horizontal accessible showsHorizontalScrollIndicator={false}>
                    {devicesSelected.map(device => {
                        return <GeneralCard key={device.id} data={device} />
                    })}
                </ScrollView>
            </View>
            <SeeMoreButton pageName={'Home'} />
        </View >
    )
}

export default Device