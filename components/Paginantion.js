import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "react-native-heroicons/solid";
const showPageNodes = totalElements => {

}

const Paginantion = ({ page, limit, totalElements }) => {
    const showElements = 5;

    const totalPages = useMemo(() => {
        return Math.round(totalElements / limit)
    }, [totalElements])

    return (
        <View className='flex-row items-center justify-center space-x-2'>
            <TouchableOpacity style={styles.inActiveNode}>
                <ChevronDoubleLeftIcon size={22} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inActiveNode}>
                <ChevronLeftIcon size={22} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inActiveNode}>
                <ChevronRightIcon size={22} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inActiveNode}>
                <ChevronDoubleRightIcon size={22} color={'black'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    activeNode: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40 / 2
    },
    inActiveNode: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40 / 2
    },
})
export default Paginantion