import HomeScreen from "../screens/HomeScreen";
import PreferentialSceen from "../screens/PreferentialSceen";
import NewArrivalScreen from "../screens/NewArrivalScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import CheckOutScreen from "../screens/CheckOutScreen";
import AuthScreen from "../screens/AuthScreen";
import BlogScreen from "../screens/BlogScreen";
export const HOME_ROUTE = {
    name: "Trang Chủ",
    component: HomeScreen
}
export const PREFERENTIAL_ROUTE = {
    name: "Ưu đãi lớn",
    component: PreferentialSceen
}
export const NEW_ROUTE = {
    name: "Hàng mới về",
    component: NewArrivalScreen
}
export const PRODUCT_ROUTE = {
    name: "Chi tiết",
    component: ProductDetailScreen
}
export const CART_ROUTE = {
    name: "Giỏ hàng",
    component: CartScreen
}
export const CHECK_OUT_ROUTE = {
    name: "Thanh toán",
    component: CheckOutScreen
}
export const AUTH_ROUTE = {
    name: "Đăng nhập",
    component: AuthScreen
}
export const BLOG_ROUTE = {
    name: "Tin tức",
    component: BlogScreen
}