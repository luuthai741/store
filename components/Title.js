import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/solid";
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HOME_ROUTE } from '../constraints/routes';

const sorts = [
    {
        "name": "Mặc định",
        "value": 1
    },
    {
        "name": "Độ phổ biến",
        "value": 2
    },
    {
        "name": "Điểm đánh giá",
        "value": 3
    },
    {
        "name": "Mới nhất",
        "value": 4
    },
    {
        "name": "Giá thấp đến cao",
        "value": 5
    },
    {
        "name": "Giá cao đến thấp",
        "value": 6
    },
]
const Title = ({ title, sort, setSort }) => {
    const navigation = useNavigation()
    return (
        <View className='justify-center items-center bg-black h-[30vh] w-[100vw] space-y-2'>
            <Text className='text-white text-3xl font-bold'>{title}</Text>
            <View className='flex-row'>
                <TouchableOpacity onPress={() => { navigation.navigate(HOME_ROUTE.name) }}>
                    <Text className='text-white text-lg'>Trang Chủ / </Text>
                </TouchableOpacity>
                <Text className='text-white text-lg font-bold'>{title}</Text>
            </View>
            <View className='flex-row'>
                <AdjustmentsHorizontalIcon color={"white"} size={24} />
                <Text className='text-white text-lg font-bold'>LỌC</Text>
            </View>
            <SelectDropdown
                data={sorts}
                defaultValueByIndex={0}
                onSelect={(selectedItem) => {
                    setSort(selectedItem.value);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem.name;
                }}
                rowTextForSelection={(item) => {
                    return item.name
                }}
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={styles.dropdownText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownButton: {
        backgroundColor: '#525252',
        borderWidth: 1,
        borderRadius: 20,
        width: '60%'
    },
    dropdownText: {
        color: 'white'
    }
})
export default Title