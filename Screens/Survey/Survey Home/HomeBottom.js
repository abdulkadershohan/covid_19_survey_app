import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {View,StyleSheet,Text} from 'react-native';
class SurveyHomeBottom extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text style={styels.Title}>Total Test Result</Text>
                    <View style={styels.container}>
                        <View style={styels.redZone}>
                            <Text style={styels.score}>0</Text>

                        </View>
                        <View style={styels.yellowZone}>
                            <Text style={styels.score}>0</Text>

                        </View>
                        <View style={styels.greenZone}>
                            <Text style={styels.score}>0</Text>

                        </View>


                    </View>



                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default SurveyHomeBottom;
const styels=StyleSheet.create({
    container:{
        height: 200,
        width: null,
        flex: 9,
        display:'flex',
        flexDirection:'row',
    },

    Title:{
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
        fontSize:20,
        textTransform:'uppercase',

    },
    score:{
        textAlign:'center',
        position:'relative',
        top:80,
        fontWeight:'bold',
        fontSize:20,
        textTransform:'uppercase',

    },
    redZone:{
        flex:3,
        backgroundColor:'red',
        borderRadius:20,
        margin:5

    },
    yellowZone:{
        flex:3,
        backgroundColor:'yellow',
        borderRadius:20,
        margin:5
    },
    greenZone:{
        flex:3,
        backgroundColor:'green',
        borderRadius:20,
        margin:5
    }
})


