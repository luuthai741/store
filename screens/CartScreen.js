import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import Header from '../components/Header'
import CartDetails from '../components/CartDetails'
import Footer from '../components/Footer'

const CartScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <CartDetails />
                <Footer />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CartScreen