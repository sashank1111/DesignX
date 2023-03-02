import React,{Component} from 'react';
 import {
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';
import Cart from './src/screen/Cart';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Payment from './src/screen/Payment';


const Stack = createStackNavigator();

export default class App extends Component {
// console.console.log();
  render(){
    console.log(store,'STORE')
    return (
      <Provider store={store}>
      <SafeAreaView style={{flex:1, backgroundColor:'#ff5c5c'}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}
           intialRouteNames="Home">
            <Stack.Screen name= "Home" component={Home} />
            <Stack.Screen name= "Cart" component={Cart} />
            <Stack.Screen name= "Payment" component={Payment} />

           </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      </Provider>
    );
  }

}



