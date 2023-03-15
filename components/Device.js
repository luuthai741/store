import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Node from './Node';
import GeneralCard from './GeneralCard';
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
        rating: 4.5
    },
    {
        id: 2,
        title: 'PRODUCT B',
        rating: 4
    },
]
const Device = () => {
    const [isSelectedDevice, setIsSelectedDevice] = useState(null);
    return (
        <View>
            <Text className='text-center font-bold'>THIẾT BỊ (BỘ DỤNG CỤ)</Text>
            <View className='flex flex-row justify-center items-center space-x-4 p-4'>
                {deviceCategories.map(device => {
                    return <Node id={device.id} title={device.title} isSelected={isSelectedDevice} setIsSelected={setIsSelectedDevice} />
                })}
            </View >
            <View className='flex flex-row p-4'>
                {devices.map(device => {
                    return <GeneralCard data={device} />
                })}
            </View>
        </View >
    )
}

export default Device