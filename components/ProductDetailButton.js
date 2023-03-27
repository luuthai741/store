import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet } from 'react-native';

const ProductDetailButton = ({ colors, productQuantity }) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <View>
            <View className='flex-row my-2 items-center justify-between'>
                <Text className='font-bold'>
                    MÀU SẮC
                </Text>
                <View>
                    <SelectDropdown
                        data={colors}
                        defaultValueByIndex={0}
                        onSelect={(selectedItem) => {
                        }}
                        buttonTextAfterSelection={(selectedItem) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item) => {
                            return item
                        }}
                        buttonStyle={styles.dropdownButton}
                        buttonTextStyle={styles.dropdownText}
                    />
                </View>
            </View>
            <View className='flex-row  items-center'>
                <TouchableOpacity disabled={quantity <= 0} className='justify-center items-center' onPress={() => { quantity - 1 < 0 ? null : setQuantity(quantity - 1) }}>
                    <View className='justify-center items-center p-2 w-6' style={{ borderColor: '#8F8F8F', borderWidth: 1, borderRightWidth: 0 }}>
                        <Text className='font-bold'>-</Text>
                    </View>
                </TouchableOpacity>
                <Text className='py-2 px-3' style={{ borderColor: '#8F8F8F', borderWidth: 1 }}>{quantity}</Text>
                <TouchableOpacity disabled={quantity >= productQuantity} className='justify-center items-center' onPress={() => { quantity + 1 > productQuantity ? null : setQuantity(quantity + 1) }}>
                    <View className='justify-center items-center p-2 w-6' style={{ borderColor: '#8F8F8F', borderWidth: 1, borderLeftWidth: 0 }}>
                        <Text className='font-bold'>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View className='flex-row space-x-2 my-2'>
                <TouchableOpacity className='justify-center items-center mt-2' onPress={() => { }}>
                    <View className='justify-center items-center bg-red-300 p-3 rounded-md'>
                        <Text className='text-white font-bold'>THÊM VÀO GIỎ HÀNG</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='justify-center items-center mt-2' onPress={() => { }}>
                    <View className='justify-center items-center bg-yellow-300 p-3 rounded-md'>
                        <Text className='text-white font-bold'>MUA NGAY</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownButton: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: 100,
    },
    dropdownText: {
        color: 'black'
    }
})
export default ProductDetailButton