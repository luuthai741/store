import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SeeMoreButton = ({ pageName }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity className='justify-center items-center' onPress={() => navigation.navigate(pageName)}>
            <View className='justify-center items-center' style={styles.borderButton}>
                <Text className='text-green-700'>XEM NHIỀU HƠN</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    borderButton: {
        borderWidth: 2,
        borderColor: 'green',
        width: 200,
        height: 50
    },
});

export default SeeMoreButton