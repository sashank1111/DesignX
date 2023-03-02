import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { APP_FONTS, APP_IMAGES } from "../utils/Common";
 




 

 export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            apiResponse: []
        }
    }









    setText(value) {
        this.setState({
            inputText: value
        })

    }

    async Post(textValue) {
        const URLNEW = "https://jsonplaceholder.typicode.com/posts"
        const cred = {
            post: textValue
        }
        console.log(cred, 'creds of ADD ORDer>>>>>>>>>>>')
        try {
            let response = await fetch(
                URLNEW,
                {
                    'method': 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify(cred)
                }
            );
            let res = await response.json()
            console.log("reesponse", res)
            console.log("reesponse2", res.post)
            let position = res.post.includes("as")
            if (position) {
                this.setState({
                    apiResponse: res.post
                }, () => { console.log(this.state.apiResponse, 'api') })
            }
            else {
                alert('NOT EXIST')
            }



        } catch (errors) {
            return errors;

        }


    }




    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{ flex: 0.5 }}>
                        <View style={{ flex: 0.25 }}>
                            <Text style={{ color: 'black', fontSize: 18, left: 20, top: 20 }}>SHOW POST </Text>
                        </View>
                        <View>
                            <FlatList
                                // horizontal
                                data={this.state.apiResponse}
                                style={{ flex: 1, padding: '25%', top: 50 }}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index, separator }) => (



                                    <View style={{}}>
                                        <View style={{}}>

                                            <Text style={{ fontSize: 14, fontFamily: APP_FONTS.bold, color: 'black' }}>{item}</Text>

                                        </View>
                                        <View style={{ justifyContent: 'center', paddingTop: 5 }}>

                                        </View>

                                    </View>

                                    // </View>
                                )}

                            />

                        </View>
                        {/* <FlatList  */}
                        {/* //   */}
                        {/* /> */}
                        {/* </View> */}
                    </View>
                    <View style={{ top: 80 }}>
                        <TextInput
                            value={this.state.inputText}
                            style={{ borderWidth: 1, borderColor: 'red', width: '80%', alignSelf: 'center' }}
                            numberOfLines={1}
                            placeholder="Enter Post"
                            onChangeText={(text) => this.setText(text)}




                        />


                        <TouchableOpacity style={{  padding: 10, top: 10 }} onPress={() => { this.Post(this.state.inputText) }}>
                            <View style={{ top: 0 }}>
                                <Text style={{ color: '#3FC288', fontFamily: APP_FONTS.bold, fontSize: 14, textAlign: "center" }}>Show Post</Text>
                            </View>
                        </TouchableOpacity>
                    </View>







                </View>
            </SafeAreaView>
        )
    }
}