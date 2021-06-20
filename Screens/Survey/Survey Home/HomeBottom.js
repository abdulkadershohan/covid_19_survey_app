import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {View,StyleSheet,Text} from 'react-native';
import axios from "axios";
class SurveyHomeBottom extends Component {
    state= {
        users:[]
    }
componentDidMount() {

        axios
            .get("http://192.168.0.101/COVID-19-SURVEY-APP/select.php")
            .then(res=>{
               this.setState({users:res.data})
               console.log(res.data.name)
            })
            .catch((error)=>{
            console.log("Api call error")
            alert(error.message);
        });


    }
    countDanger(){
        let countDanger = 0;
        this.state.users
            .filter((score) => score.score !=0)
            .map(function (score, i) {
                countDanger += 1;
            });
        return countDanger;

    }
    countYellow() {
        let countYellow = 0;
        this.state.users
            .filter((score) => score.score !=0)
            .map(function (score, i) {
                countYellow += 1;
            });
        return countYellow;
    }
    countGreen() {
        let countGreen = 0;
        this.state.users
            .filter((score) => score.score <= 1)
            .map(function (score, i) {
                countGreen += 1;
            });
        return countGreen;
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.Title}>Total Test Result</Text>
                    <View style={styles.container}>
                        <View style={styles.redZone}>
                            <Text style={styles.score}>{this.countDanger()}</Text>
                        </View>
                        <View style={styles.yellowZone}>
                            <Text style={styles.score}>{this.countYellow()}</Text>

                        </View>
                        <View style={styles.greenZone}>
                            <Text style={styles.score}>{this.countGreen()}</Text>

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


