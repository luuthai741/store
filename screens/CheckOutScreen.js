import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CheckOutDetail from '../components/CheckOutDetail'

const CheckOutScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <CheckOutDetail />
                <Footer />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CheckOutScreen