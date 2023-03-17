import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useRef } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data = [
    {
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
        title: "Lorem Ipsum",
        body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl: "https://picsum.photos/id/12/200/300",
    },
];

const CarouselCardItem = ({ item, index }) => {
    return (
        <View className='flex items-center'>
            <Image key={index}
                source={{ uri: item.imgUrl }}
                className='h-40 w-[100vw]'
            />
        </View>
    )
}

export const SLIDER_WIDTH = Dimensions.get('window').width - 30;

const BestChoice = () => {
    const isCarousel = React.useRef(null);
    const [index, setIndex] = React.useState(0);
    return (
        <View>
            <View className='flex flex-row items-center space-x-2 p-4'>
                <View className='h-1 flex-1 bg-gray-400' />
                <View>
                    <Text className='text-center font-bold'>SỰ LỰA CHỌN TỐT NHẤT CHO BẠN</Text>
                </View>
                <View className='h-1 flex-1 bg-gray-400' />
            </View>
            <View>
                <Carousel
                    layout="stack"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={SLIDER_WIDTH}
                    useScrollView={true}
                    loop
                    autoplay
                    autoplayInterval={1}
                    onSnapToItem={(index) => setIndex(index)}
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 8,
                        height: 8,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={0.5}
                    tappableDots={true}
                />
            </View>

        </View>

    )
}

export default BestChoice