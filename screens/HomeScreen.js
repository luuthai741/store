import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import BestChoice from '../components/BestChoice'
import HotCategories from '../components/HotCategories'
import Device from '../components/Device'
import Tank from '../components/Tank'
import Oil from '../components/Oil'
import Brands from '../components/Brands'
import PreferentialInfo from '../components/PreferentialInfo'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const HomeScreen = () => {
    console.log("re-render");
    return (
        <SafeAreaView className='bg-white'>
            <ScrollView>
                <Header />
                <BestChoice />
                <HotCategories />
                <Device />
                <Tank />
                <Oil />
                <Brands />
                <PreferentialInfo />
                <Blogs />
                <Footer />
            </ScrollView>
        </SafeAreaView >
    )
}

export default HomeScreen