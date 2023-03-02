import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { APP_FONTS, APP_IMAGES } from "../utils/Common";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action/productAction";





const RESTAURANTS = [
    {
        id: 1,
        // foodImage: require('../../assets/delightPizza.png'),
        foodImage: require('../../assets/delightPizza.png'),
        foodName: 'Chicken Hawaiian',
        categoryName: 'Chicken, Chineese and pineapple',
        rating: '4.5',
        price: 10.35

    },
    {
        id: 2,
        // foodImage: require('../../Assets/icons/food-img.png'),
        foodImage: require('../../assets/leafPizza.png'),
        foodName: 'Pineapple Pizza',
        categoryName: 'Pineapple and Tomato',
        rating: '4.5',
        price: 10.35


    },
    {
        id: 3,
        // foodImage: require('../../Assets/icons/food-img.png'),
        foodImage: require('../../assets/delightPizza.png'),
        foodName: 'Chicken Hawaiian',
        categoryName: 'Chicken, Chineese and pineapple',
        rating: '4.5',
        price: 10.35



    },
    {
        id: 4,
        // foodImage: require('../../Assets/icons/food-img.png'),
        foodImage: require('../../assets/leafPizza.png'),
        foodName: 'Pineapple Pizza',
        categoryName: 'Pineapple and Tomato',
        rating: '4.5',
        price: 10.35
    }
]

// const dispatch = useDispatch()
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantArray: []
        }
    }
    // cartAddition(value){
    //     console.log(value,'valueee')
    //     this.setState(prevState => ({
    //         restaurantArray: [...prevState.restaurantArray, value]
    //       }),()=>{ma(fetchProducts(this.state.restaurantArray)), this.props.navigation.navigate('Cart')})
    // //    this.setState({
    // //     restaurantArray:[...this.state.restaurantArray,value]
    // //    },console.log(this.state.restaurantArray,'resArray--->'))

    // }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{ flex: 0.40, backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <View style={{
                                    margin: 30, backgroundColor: 'white',
                                    borderRadius: 8,
                                    paddingVertical: 20,
                                    paddingHorizontal: 20,
                                    width: 15,
                                    height: 15,
                                    borderWidth: 1,
                                    // borderRadius: 5,
                                    borderColor: '#ddd',
                                    borderBottomWidth: 2,
                                    shadowColor: '#000000',
                                    shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.9,
                                    // left:30
                                }}>
                                    <Image source={APP_IMAGES.backIcon} style={{ height: 20, width: 10, right: 7, bottom: 10 }} resizeMode={'contain'} />

                                </View>
                                <View>
                                    <Text style={{ left: 30, fontFamily: APP_FONTS.bold, fontSize: 32 }}>Fast</Text>
                                    <Text style={{ left: 30, fontFamily: APP_FONTS.bold, fontSize: 36, color: '#FE724C' }}>Food</Text>
                                    <Text style={{ left: 30, fontFamily: APP_FONTS.medium, fontSize: 14, color: '#9796A1', top: 10 }}>80 type of pizza </Text>
                                </View>
                            </View>
                            <View style={{ right: 0, justifyContent: 'center', bottom: 85 }}>
                                <Image source={APP_IMAGES.upperPizza} style={{ height: 600, width: 250 }} resizeMode={'contain'} />
                            </View>
                        </View>

                    </View>
                    {/* <View style={{ backgroundColor: 'white', flex: 0.06 }}> */}
                    <View style={{ flex: 0.06, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#111719', fontSize: 10, left: 24, top: 5, fontFamily: APP_FONTS.medium }}>Short by: </Text>
                            {/* <View style={{flexDirection:'row'}}> */}
                            <Text style={{ color: '#FE724C', fontSize: 10, left: 24, top: 5, fontFamily: APP_FONTS.medium }}>Popular</Text>
                            <Image source={APP_IMAGES.downArrow} style={{ height: 6, width: 6, left: 28, top: 9 }} resizeMode={'contain'} />
                            {/* </View> */}
                        </View>
                        <View style={{ right: 60, top: 0 }}>
                            <Image source={APP_IMAGES.colorPick} style={{ height: 6, width: 6, zIndex: 2, top: 4, left: 10 }} resizeMode={'contain'} />
                            <View style={{ borderBottomWidth: 2, width: 20, borderColor: '#FE724C' }}>
                            </View>
                            <Image source={APP_IMAGES.colorPick} style={{ height: 6, width: 6, zIndex: 2, top: 4, left: 2 }} resizeMode={'contain'} />
                            <View style={{ borderBottomWidth: 2, width: 20, borderColor: '#FE724C' }}>
                            </View>
                        </View>


                        {/* </View> */}

                    </View>
                    <View style={{ flex: 0.60, backgroundColor: '#DADADA', justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList
                            data={RESTAURANTS}
                            style={{ flex: 1 }}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index, separator }) => (

                                //    <TouchableOpacity onPress={()=>{this.cartAddition(item)}}>
                                <View style={{ borderWidth: 1, height: 240, width: 340, top: 20, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>

                                    {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate('FoodList', { type: this.state.Item == 'grocery' ? 'grocery' : 'food', id: this.state.Item == 'grocery' ? 'id' : item._id }) }}> */}



                                    <TouchableOpacity onPress={() => navigate('Cart')}>

                                        <Image source={item.foodImage} style={{ height: 170, width: '100%', borderRadius: 25, alignSelf: 'center', right: 0 }} />
                                    </TouchableOpacity>

                                    <View style={{ flexDirection: 'row', backgroundColor: 'white', borderBottomLeftRadius: 4, borderBottomRightRadius: 4, height: 60, width: '85%', left: 20 }}>
                                        <View style={{ paddingTop: 10, paddingBottom: 5, paddingLeft: 26 }}>

                                            <Text style={{ fontSize: 14, fontFamily: APP_FONTS.bold, color: 'black' }}>{item.foodName}</Text>
                                            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.medium, color: '#5B5B5E' }}>{item.categoryName}</Text>

                                            {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.semi_bold }}>{item.locationName}</Text> */}
                                        </View>
                                        <View style={{ justifyContent: 'center', paddingTop: 5 }}>

                                        </View>

                                    </View>
                                    {/* </TouchableOpacity> */}

                                </View>
                                // </TouchableOpacity>
                            )}

                        />

                    </View>






                </View>
            </SafeAreaView>
        )
    }
}