import { View, Text, Dimensions, StyleSheet, Image, FlatList } from 'react-native'
import React, { memo, useCallback, useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native';

const data = [
    {
        id: 1,
        imgUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        imgUrl: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        imgUrl: "https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const Slide = memo(function Slide({ data }) {
    return (
        <TouchableOpacity style={styles.slide}>
            <Image source={{ uri: data.imgUrl }} style={styles.slideImage}></Image>
        </TouchableOpacity>
    );
});

function Pagination({ index }) {
    return (
        <View style={styles.pagination} pointerEvents="none">
            {data.map((_, i) => {
                return (
                    <View
                        key={i}
                        style={[
                            styles.paginationDot,
                            index === i
                                ? styles.paginationDotActive
                                : styles.paginationDotInactive,
                        ]}
                    />
                );
            })}
        </View>
    );
}
const BestChoice = () => {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;

    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        const distance = Math.abs(roundIndex - index);
        const isNoMansLand = 0.4 < distance;
        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 10,
        windowSize: 2,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
            (_, index) => (
                {
                    index,
                    length: windowWidth,
                    offset: index * windowWidth,
                }),
            []
        ),
    };

    const renderItem = useCallback(function renderItem({ item }) {
        return <Slide data={item} />;
    }, []);

    return (
        <>
            <FlatList
                data={data}
                style={styles.carousel}
                renderItem={renderItem}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
            />
            <Pagination index={index}></Pagination>
        </>
    );
}

const styles = StyleSheet.create({
    slide: {
        height: windowHeight * 0.35,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: { width: windowWidth * 0.9, height: windowHeight * 0.35 },
    slideTitle: { fontSize: 24 },
    slideSubtitle: { fontSize: 18 },

    pagination: {
        position: "absolute",
        bottom: 8,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotActive: { backgroundColor: "black" },
    paginationDotInactive: { backgroundColor: "gray" },
    carousel: { flex: 1 },
});
export default BestChoice