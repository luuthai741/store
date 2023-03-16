import { View, Text } from 'react-native'
import React from 'react'
import { GiftIcon } from "react-native-heroicons/outline";
import { Image } from 'react-native';

let preferentials = [
    {
        id: 1,
        title: 'Đăng ký thành viên',
        imageUrl: 'https://vapechinhhang.com/wp-content/uploads/2022/07/dang-ky-thanh-vien.jpg',
        description: 'Đăng ký thành viên ngay chỉ với vài bước để tận hương vô vàn các ưu đãi. Các thành viên sẽ nhận được nhiều ưu đãi hơn khách hàng thông thường.'
    },
    {
        id: 2,
        title: 'Ưu đãi thành viên',
        imageUrl: 'https://vapechinhhang.com/wp-content/uploads/2022/07/uu-dai-thanh-vien.png',
        description: 'Khám phá các đặc quyền dành cho thành viên và rất nhiều chương trình hấp dẫn như nhân đôi tích lũy điểm, voucher ưu đãi, giảm giá theo cấp bậc thành viên VIP và nhiều ưu đãi khác.'
    },
    {
        id: 3,
        title: 'Điểm thưởng',
        imageUrl: 'https://vapechinhhang.com/wp-content/uploads/2022/07/tich-luy-diem-khach-hang.jpg',
        description: 'Điểm thưởng tích lũy có thể sử dụng cho lần mua hàng tiếp theo. Bên cạnh mua hàng, bạn có nhận điểm tích lũy khi tham gia viết review từ các hoạt động khác '
    },
];

const PreferentialInfo = () => {
    return (
        <View className='mt-10'>
            <View className='flex flex-row items-center space-x-2 p-4'>
                <View className='h-1 flex-1 bg-gray-400' />
                <View className='flex flex-row justify-center items-center space-x-2'>
                    <GiftIcon color='gray' size={26} />
                    <Text className='text-center font-bold'>
                        MUA HÀNG NHẬN NHIỀU ƯU ĐÃI THÀNH VIÊN
                    </Text>
                </View>
                <View className='h-1 flex-1 bg-gray-400' />
            </View>
            <View className='p-4'>
                {
                    preferentials.map(preferential => {
                        return (
                            <View key={preferential.id} className='items-center'>
                                <Image className='h-20 w-20'
                                    source={{
                                        uri: preferential.imageUrl
                                    }}
                                />
                                <Text className='text-center font-bold'>
                                    {preferential.title}
                                </Text>
                                <Text className='text-center '>
                                    {preferential.description}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default PreferentialInfo