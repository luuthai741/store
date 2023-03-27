import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import Footer from '../components/Footer'
import { dateFormatter } from '../utils/format'
import Paginantion from '../components/Paginantion'

const blogs = [
    {
        id: 1,
        title: '7 sản phẩm giá tốt, bán chạy nhất 2023',
        createDate: '2023-02-24',
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
        createDate: '2022-12-20',
        description: 'Nhân dịp khai trương chi nhánh mới ở Đà Lạt. Chúng tôi ....'
    },
    {
        id: 4,
        title: 'Shop mới khai trương ở Cần Thơ',
        createDate: '2023-10-12',
        description: 'Nhân dịp khai trương chi nhánh mới ở Cần Thơ. Chúng tôi ....'
    },
]

const BlogScreen = () => {
    const [page, setPage] = useState(1);
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <View className='p-4'>
                    <Text className='font-bold text-center'>TIN TỨC</Text>
                    <Text className='font-bold text-center'>Blog cập nhất những tin tức mới nhất và chia sẻ những kiến thức cơ bản đến nâng cao giúp bạn có những trải nghiệm tốt nhất</Text>
                    <View>
                        {
                            blogs.map(blog => {
                                return (
                                    <TouchableOpacity key={blog.id} className='justify-center h-[20vh] w-[90vw] border-1 items-center mt-6 p-4'>
                                        <Text className='font-bold'>{blog.title}</Text>
                                        <Text >{dateFormatter(blog.createDate)}</Text>
                                        <Text>{blog.description}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <Paginantion page={page} limit={10} totalElements={119} setPage={setPage} />
                </View>
                <Footer />
            </ScrollView>
        </SafeAreaView >
    )
}

export default BlogScreen