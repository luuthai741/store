import HomeScreen from "../screens/HomeScreen";
import PreferentialSceen from "../screens/PreferentialSceen";
import NewArrivalScreen from "../screens/NewArrivalScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
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