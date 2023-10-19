import Home from './screens/Home';
import Product from './screens/Product';
import ProductDetail from './screens/ProductDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />  
        <Stack.Screen name='Product' component={Product} />  
        <Stack.Screen name='ProductDetail' component={ProductDetail} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

