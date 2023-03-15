import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import BestChoice from '../components/BestChoice'
import HotCategories from '../components/HotCategories'
import Device from '../components/Device'
const HomeScreen = () => {
    console.log("re-render");
    return (
        <SafeAreaView className='bg-white'>
            <ScrollView>
                <Header />
                <BestChoice />
                <HotCategories />
                <Device />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen