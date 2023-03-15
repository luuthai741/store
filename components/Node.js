import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Node = ({ id, title, isSelected, setIsSelected }) => {
    return (
        <TouchableOpacity onPress={() => { setIsSelected(id) }}>
            <View style={isSelected == id ? styles.noneSelectedNote : styles.selectedNode} className='flex items-center mr-3 p-2'>
                <Text className={isSelected == id ? 'text-black' : 'text-gray-500'}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    noneSelectedNote: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'black'
    },
    selectedNode: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'gray'
    }
});

export default Node