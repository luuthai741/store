import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

const ProductDetailImage = ({ images, discountPercent }) => {
    const [activeImage, setActiveImage] = useState(0);
    return (
        <View className='space-y-2'>
            <View className='flex justify-center'>
                {discountPercent > 0 ? (
                    <View className='absolute flex justify-center items-center z-10 bg-red-500 ml-2 w-12 h-12 rounded-full'>
                        <Text className='text-white'>-{discountPercent}%</Text>
                    </View>
                ) : null}
                <Image className='w-[90vw] h-40' source={{
                    uri: images[activeImage]
                }} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {images.length > 0 && images.map((image, index) => {
                    return (
                        <TouchableOpacity onPress={() => { setActiveImage(index) }}>
                            <Image className='w-[90vw] h-40' source={{
                                uri: image
                            }} />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default ProductDetailImage