import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { dateFormatter } from '../utils/format'

const blogs = [
    {
        id: 1,
        title: '7 sản phẩm giá tốt, bán chạy nhất 2023',
        createDate: '2023-24-02',
        description: '7 sản phẩm giá tốt, bán chạy nhất 2023. Hiện nay các ....'
    },
    {
        id: 2,
        title: 'Tặng quà tết 2023',
        createDate: '2023-11-01',
        description: 'Để tri ân khách hàng nhân dịp cuối năm. Shop tổ chức chương trình ....'
    },
    {
        id: 3,
        title: 'Shop mới khai trương ở Đà Lạt',
        createDate: '2022-20-12',
        description: 'Nhân dịp khai trương chi nhánh mới ở Đà Lạt. Chúng tôi ....'
    },
    {
        id: 4,
        title: 'Shop mới khai trương ở Cần Thơ',
        createDate: '2023-10-12',
        description: 'Nhân dịp khai trương chi nhánh mới ở Cần Thơ. Chúng tôi ....'
    },
]

const Blogs = () => {
    const navigation = useNavigation();
    return (
        <View className='justify-center items-center mt-10'>
            <Text className='font-bold'>Blog tin tức</Text>
            <Text >Các bài với mới nhất của chúng tôi từ blog</Text>
            <View>
                {
                    blogs.map(blog => {
                        return (
                            <TouchableOpacity key={blog.id} className='justify-center h-[20vh] w-[90vw] border-1 items-center mt-6 p-4 shadow-lg'>
                                <Text className='font-bold'>{blog.title}</Text>
                                <Text >{dateFormatter(blog.createDate)}</Text>
                                <Text>{blog.description}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <TouchableOpacity className='justify-center items-center' onPress={() => navigation.navigate('Home')}>
                <View className='justify-center items-center' style={styles.borderButton}>
                    <Text>XEM BLOG</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    borderButton: {
        borderWidth: 2,
        borderColor: 'black',
        width: 200,
        height: 50
    },
});
export default Blogs