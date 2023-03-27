import { View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

const AuthScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <View className='bg-gray-200 py-5' style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1 }}>
                    <Text className='text-lg text-center font-bold'>TÀI KHOẢN CỦA TÔI</Text>
                    <Text className='text-center'>Đăng nhập</Text>
                </View>
                <View className='p-4    '>
                    <SignInForm />
                    <SignUpForm />
                </View>
                <Footer />
            </ScrollView>
        </SafeAreaView >
    )
}

export default AuthScreen