import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import { NEW_ROUTE } from '../constraints/routes'
import Products from '../components/Products'

const NewArrivalScreen = () => {
    return (
        <SafeAreaView>
            <Header />
            <Title title={NEW_ROUTE.name} />
            <Products />
        </SafeAreaView>
    )
}

export default NewArrivalScreen