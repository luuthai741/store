import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import { NEW_ROUTE } from '../constraints/routes'
import Products from '../components/Products'
import { ScrollView } from 'react-native'
import Footer from '../components/Footer'
let products = [
    {
        id: 1,
        title: 'PRODUCT A',
        rating: 3,
        discountPercent: 4,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 1
    },
    {
        id: 2,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 3,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    },
    {
        id: 4,
        title: 'PRODUCT B',
        rating: 4,
        discountPercent: 0,
        price: 1200000,
        imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoryId: 2
    }
]
const NewArrivalScreen = () => {
    const [sort, setSort] = useState(1);
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <Title title={NEW_ROUTE.name} sort={sort} setSort={setSort} />
                <Products products={products} />
                <Footer />
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewArrivalScreen