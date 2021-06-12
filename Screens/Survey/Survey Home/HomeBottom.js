import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {View,StyleSheet,Text} from 'react-native';
class SurveyHomeBottom extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.Title}>Total Test Result</Text>
                    <View style={styles.container}>
                        <View style={styles.redZone}>
                            <Text style={styles.score}>0</Text>

                        </View>
                        <View style={styles.yellowZone}>
                            <Text style={styles.score}>0</Text>

                        </View>
                        <View style={styles.greenZone}>
                            <Text style={styles.score}>0</Text>

                        </View>


                    </View>



                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default SurveyHomeBottom;
const styles=StyleSheet.create({
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


