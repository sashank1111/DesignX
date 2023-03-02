// import React, { Component } from "react";
// import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
// import { APP_FONTS, APP_IMAGES } from "../utils/Common";
// import { connect } from 'react-redux';





// const RESTAURANTS = [
//     {
//         id: 1,
//         // foodImage: require('../../assets/delightPizza.png'),
//         foodImage: require('../../assets/delightPizza.png'),
//         foodName: 'Chicken Hawaiian',
//         categoryName: 'Chicken, Chineese and pineapple',
//         rating: '4.5',
//         price: 10.35

//     },
//     {
//         id: 2,
//         // foodImage: require('../../Assets/icons/food-img.png'),
//         foodImage: require('../../assets/leafPizza.png'),
//         foodName: 'Pineapple Pizza',
//         categoryName: 'Pineapple and Tomato',
//         rating: '4.5',
//         price: 10.35


//     },
//     {
//         id: 3,
//         // foodImage: require('../../Assets/icons/food-img.png'),
//         foodImage: require('../../assets/delightPizza.png'),
//         foodName: 'Chicken Hawaiian',
//         categoryName: 'Chicken, Chineese and pineapple',
//         rating: '4.5',
//         price: 10.35



//     },
//     {
//         id: 4,
//         // foodImage: require('../../Assets/icons/food-img.png'),
//         foodImage: require('../../assets/leafPizza.png'),
//         foodName: 'Pineapple Pizza',
//         categoryName: 'Pineapple and Tomato',
//         rating: '4.5',
//         price: 10.35
//     }
// ]


// class Cart extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // type:this.props.route.params.type,
//         }
//         // console.log(this.state.type,'Typpeee')
//     }
//     // addToCart = () => {
//     //     this.props.addItemsToCart(this.props.item)
//     // }
//     // addCart(){
//     //     this.props.addItemsToCart(this.props.item)
//     // }
//     // addItemsToCart = (product) => {
//     //     this.props.addToCart(product);
//     // }
//     // componentWillReceiveProps(nextProps) {
//     //     if (nextProps.cartItems !== this.props.cartItems) {
//     //         // this.startAnimation();
//     //         alert('JJAJAJ')
//     //     }
//     // }


//     render() {
//         const { cartItems } = this.props;

//         return (
//             <SafeAreaView style={{ flex: 1 }}>
//                 <View style={{
//                     flex: 1,
//                 }}>
//                     <View style={{ flex: 0.12, backgroundColor: 'white' }}>

//                         <View style={{ flexDirection: 'row', borderWidth: 1 }}>
//                             <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
//                                 {/* <View style={{borderWidth:1}}> */}
//                                 <View style={{
//                                     margin: 20, backgroundColor: 'white',
//                                     borderRadius: 8,
//                                     paddingVertical: 20,
//                                     paddingHorizontal: 20,
//                                     width: 15,
//                                     height: 15,
//                                     // borderWidth: 1,
//                                     // borderRadius: 5,
//                                     borderColor: '#ddd',
//                                     borderBottomWidth: 2,
//                                     shadowColor: '#000000',
//                                     shadowOffset: { width: 0, height: 3 },
//                                     shadowOpacity: 0.9,
//                                     borderWidth: 1
//                                     // left:30
//                                 }}>
//                                     <Image source={APP_IMAGES.backIcon} style={{ height: 20, width: 10, right: 7, bottom: 10 }} resizeMode={'contain'} />

//                                 </View>
//                             </TouchableOpacity>
//                             <View style={{ left: 90, alignSelf: 'center', bottom: 3 }}>
//                                 <Text style={{ left: 0, fontFamily: APP_FONTS.medium, fontSize: 26 }}>Cart</Text>
//                             </View>
//                             {/* </View> */}

//                         </View>

//                     </View>

//                     <View style={{ flex: 0.40, backgroundColor: '#DADADA', justifyContent: 'center', alignItems: 'center', top: 0 }}>
//                         <FlatList
//                             data={RESTAURANTS}
//                             style={{ flex: 1, width: '100%', backgroundColor: 'white' }}
//                             showsHorizontalScrollIndicator={false}
//                             showsVerticalScrollIndicator={false}
//                             keyExtractor={item => item.id}
//                             renderItem={({ item, index, separator }) => (

//                                 //    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Cart')}}>
//                                 <View style={{ borderWidth: 1, padding: 20 }}>

//                                     {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate('FoodList', { type: this.state.Item == 'grocery' ? 'grocery' : 'food', id: this.state.Item == 'grocery' ? 'id' : item._id }) }}> */}


//                                     <View style={{ flexDirection: 'row', flex: 1 }}>

//                                         <View style={{ flex: 0.34 }}>
//                                             <Image source={item.foodImage} style={{ height: '100%', width: '100%', borderRadius: 15, right: 0 }} />
//                                         </View>

//                                         <View style={{ backgroundColor: 'white', borderBottomLeftRadius: 4, borderBottomRightRadius: 4, flex: 0.33, left: 20 }}>
//                                             <View style={{}}>

//                                                 <Text style={{ fontSize: 14, fontFamily: APP_FONTS.bold, color: 'black' }}>{item.foodName}</Text>
//                                                 <Text style={{ fontSize: 11, fontFamily: APP_FONTS.medium, color: '#5B5B5E', top: 5 }}>{item.categoryName}</Text>
//                                                 <View style={{ flexDirection: 'row', top: 10 }}>
//                                                     <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold, color: '#FE724C' }}>$</Text>
//                                                     <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold, color: '#FE724C' }}> {item.price}</Text>
//                                                 </View>

//                                                 {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.semi_bold }}>{item.locationName}</Text> */}
//                                             </View>


//                                         </View>
//                                         <View style={{ borderWidth: 1, flex: 0.33, left: 10 }}>
//                                             <View style={{ alignSelf: 'flex-end', right: 10, top: 3 }}>
//                                                 <Image source={APP_IMAGES.leftToRight} style={{ height: 10, width: 10, top: 1 }} resizeMode={'stretch'} />
//                                                 <Image source={APP_IMAGES.rightToLeft} style={{ height: 10, width: 10, zIndex: 1, bottom: 9, right: 1 }} resizeMode={'stretch'} />
//                                             </View>
//                                             <View style={{borderWidth:1,height:50,top:5,flexDirection:'row'}}>
//                                             <TouchableOpacity onPress={()=> {this.addCart()}}>
//                                                 <View style={{height:22,borderWidth:1,width:22,borderRadius:11,top:10,left:20,borderColor:'#FE724C'}}>
//                                                 </View>
//                                                 </TouchableOpacity>
//                                                 {/* <Text style={{fontFamily:APP_FONTS.bold,fontSize:14,left:30,top:12}}>{}</Text> */}
//                                                 <Text style={{fontFamily:APP_FONTS.bold,fontSize:14,left:30,top:12}}>Your cart: items</Text>
                                               
//                                                 {/* <Image source={APP_IMAGES.rectangle} style={{height:10,width:10}} resizeMode={'contain'} /> */}
                                               
                                                
//                                                 <View style={{height:22,borderWidth:1,width:22,borderRadius:11,top:10,left:30,borderColor:'#FE724C',backgroundColor:'#FE724C'}}>

//                                                 </View>
//                                                 {/* </TouchableOpacity> */}
//                                             </View>


//                                         </View>
//                                     </View>
//                                     {/* </TouchableOpacity> */}

//                                 </View>
//                                 // </TouchableOpacity>   
//                             )}

//                         />

//                     </View>






//                 </View>
//             </SafeAreaView>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     cartItems: state.cart.cart
// });
// // export default connect(
// //     mapStateToProps, {addToCart}
// // )(Cart);
// export default connect(mapStateToProps)(Cart)
// ;
// // export default Cart;
import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { APP_FONTS, APP_IMAGES } from "../utils/Common";
import { connect } from 'react-redux';
import { ADD_TO_CART } from "../redux/action/type";
import { addToCart,removeItem } from "../redux/action/cartAction";

class Cart extends Component {
    constructor(props) {
                super(props);
                this.state = {
        //             // type:this.props.route.params.type,
        //         }
        //         // console.log(this.state.type,'Typpeee')
            }
        }
    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props.data.cart.total,'HELLO')
        console.log(this.props.data.cart,'HELLO1')
        console.log(this.props.data,'HELLO2')
        return (
            <View style={{flexDirection:'row',padding:10}}>
                <TouchableOpacity onPress={()=>{this.props.addToCartHandler(this.props.data.cart.total+1)}}>
                <View>
                    <Text style={{color:'red'}}>ADD TO CART </Text>
                </View>
                </TouchableOpacity>
                <Text> {this.props.data.cart.total}  TOTAL LENGTH</Text>
                <TouchableOpacity onPress={()=>{this.props.removeToCartHandler(this.props.data.cart.total-1)}}>
                <View>
                    <Text style={{color:'red'}}> REMOVE TO CART </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigate('Payment')}}>
                <View>
                    <Text style={{color:'red'}}> PAYMENT </Text>
                </View>
                </TouchableOpacity>
                {/* <div className="card-wrapper"> */}
                    {/* <img src={Cart} alt="Add to cart" /> */}
                    {/* <span>{this.props.data.length}</span> */}
                {/* </div> */}
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    data: state,
});

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data)), //import action components
    removeToCartHandler: (data) => dispatch(removeItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


