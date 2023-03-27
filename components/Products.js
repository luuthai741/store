import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GeneralCard from './GeneralCard';
import { TouchableOpacity } from 'react-native';

const Products = ({ products }) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <View>
            <View className='flex-row flex-wrap p-4 justify-between'>
                {products.map(product => {
                    return (
                        <View className='mb-2' key={product.id} style={{ width: '47%' }}>
                            <GeneralCard key={product.id} data={product} />
                        </View>
                    )
                })}
            </View>
            {isLoading ? <ActivityIndicator size={30} /> : null}
            {!isLoading
                ? <TouchableOpacity className='justify-center items-center mt-2' onPress={() => { }}>
                    <View className='justify-center items-center ' style={styles.borderButton}>
                        <Text className='text-white'>Xem Thêm</Text>
                    </View>
                </TouchableOpacity>
                : null}
        </View>
    )
}
const styles = StyleSheet.create({
    borderButton: {
        borderWidth: 2,
        borderColor: '#FF9900',
        backgroundColor: '#FF9900',
        width: 200,
        height: 50,
        borderRadius: 10
    }
});
export default Products