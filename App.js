import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AUTH_ROUTE, BLOG_ROUTE, CART_ROUTE, CHECK_OUT_ROUTE, HOME_ROUTE, NEW_ROUTE, PREFERENTIAL_ROUTE, PRODUCT_ROUTE } from './constraints/routes'

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={HOME_ROUTE.name}>
        <Drawer.Screen name={HOME_ROUTE.name} component={HOME_ROUTE.component} options={{
          headerShown: false
        }} />
        <Drawer.Screen name={NEW_ROUTE.name} component={NEW_ROUTE.component} options={{
          headerShown: false
        }} />
        <Drawer.Screen name={PREFERENTIAL_ROUTE.name} component={PREFERENTIAL_ROUTE.component} options={{
          headerShown: false
        }} />
        <Drawer.Screen name={PRODUCT_ROUTE.name} component={PRODUCT_ROUTE.component} options={{
          headerShown: false
        }} />
        <Drawer.Screen name={CART_ROUTE.name} component={CART_ROUTE.component} options={{
          headerShown: false
        }} />
        <Drawer.Screen name={CHECK_OUT_ROUTE.name} component={CHECK_OUT_ROUTE.component} options={{
          headerShown: false
        }} />
        <Drawer.Screen name={AUTH_ROUTE.name} component={AUTH_ROUTE.component} options={{
          headerShown: false
        }} />
        <Drawer.Screen name={BLOG_ROUTE.name} component={BLOG_ROUTE.component} options={{
          headerShown: false
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

