import React, {Component} from 'react';
import {SafeAreaView, ScrollView,View,Text,StyleSheet,KeyboardAvoidingView} from 'react-native';
import {Container, Header, Content, FooterTab, Button, Icon, Badge, Card, CardItem, Body} from 'native-base';
import SurveyStyle from '../Style/SurveyStyle';
import Question from "../Question/Question";
import Answer from "../../Survey/Answer/Answer";
import InputForm from "../../Form/InputForm";
import AnswerFungus from "../Answer/Answer";
import Footer1 from "../../../Component/Footer";



export default class QuizBlackFungus extends Component {
    constructor(props) {
        super(props);
        this.state={
            questions:{
                subtitle:'You can select multiple options',
                1:'Symptoms of rhinocerebral (sinus and brain) mucormycosis include: ',
                2:'Symptoms of pulmonary (lung) mucormycosis include:',
                3:'Symptoms of gastrointestinal mucormycosis include:'

            },
            answers:{
                1:{
                    1:'One-sided facial swelling',
                    2:'Headache',
                    3:'Black lesions on nasal bridge or upper inside of mouth that quickly become more severe',
                    4:'Fever'
                },
                2:{
                    1:'Fever',
                    2:'Cough',
                    3:'Chest pain',
                    4:'Shortness of breath'
                },
                3:{
                    1:'Abdominal pain',
                    2:'Nausea and vomiting',
                    3:'Gastrointestinal bleeding'

                }
            },
            score:0,
            disabled:{
                q1:{
                    1:false,
                    2:false,
                    3:false,
                    4:false,
                }
            }

        }
    }
    upDateScore=()=>{
        let score=this.state.score;
        this.state.score=score+1;
    }



    render(){
        let { questions, answers, score,disabled } = this.state;
        return(
            <Container>
                <Content>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{
                                    fontWeight:'bold'
                                }}>Black Fungus Risk Test</Text>
                            </CardItem>
                            <CardItem bordered>
                                   <Body>
                                       <Text style={styles.question}>{questions["1"]}</Text>
                                       <Text  note style={styles.subtitle}>{questions.subtitle}</Text>
                                       <View style={styles.container}>
                                               <Button full primary style={styles.button}  onPress={this.upDateScore}>
                                                   <Text style={styles.option_Text} >
                                                       {answers['1']['1']}
                                                   </Text>
                                               </Button>
                                               <Button full  primary style={styles.button}>
                                                   <Text style={styles.option_Text}>

                                                       {answers['1']['2']}

                                                   </Text>
                                               </Button>
                                               <Button full primary style={styles.button}>
                                                   <Text style={styles.option_Text}>

                                                       {answers['1']['3']}

                                                   </Text>
                                               </Button>
                                               <Button full primary style={styles.button}>
                                                   <Text style={styles.option_Text}>

                                                       {answers['1']['4']}

                                                   </Text>
                                               </Button>
                                       </View>

                                   </Body>

                            </CardItem>
                            <CardItem footer bordered>
                            </CardItem>
                        </Card>
                        <Card>

                            <CardItem bordered>
                                <Body>
                                    <Text style={styles.question}>{questions["2"]}</Text>
                                    <Text  note style={styles.subtitle}>{questions.subtitle}</Text>
                                    <View style={styles.container}>
                                        <Button full primary style={styles.button}>
                                            <Text style={styles.option_Text}>
                                                {answers['2']['1']}
                                            </Text>
                                        </Button>
                                        <Button full  primary style={styles.button}>
                                            <Text style={styles.option_Text}>

                                                {answers['2']['2']}

                                            </Text>
                                        </Button>
                                        <Button full primary style={styles.button}>
                                            <Text style={styles.option_Text}>

                                                {answers['2']['3']}

                                            </Text>
                                        </Button>
                                        <Button full primary style={styles.button}>
                                            <Text style={styles.option_Text}>

                                                {answers['2']['4']}

                                            </Text>
                                        </Button>
                                    </View>

                                </Body>

                            </CardItem>
                            <CardItem footer bordered>
                            </CardItem>
                        </Card>
                        <Card>

                            <CardItem bordered>
                                <Body>
                                    <Text style={styles.question}>{questions["3"]}</Text>
                                    <Text  note style={styles.subtitle}>{questions.subtitle}</Text>
                                    <View style={styles.container}>
                                        <Button full primary style={styles.button}>
                                            <Text style={styles.option_Text}>
                                                {answers['3']['1']}
                                            </Text>
                                        </Button>
                                        <Button full  primary style={styles.button}>
                                            <Text style={styles.option_Text}>

                                                {answers['3']['2']}

                                            </Text>
                                        </Button>
                                        <Button full primary style={styles.button}>
                                            <Text style={styles.option_Text}>

                                                {answers['3']['3']}

                                            </Text>
                                        </Button>
                                        <Button full primary style={styles.button}>
                                            <Text style={styles.option_Text}>

                                                {answers['2']['4']}

                                            </Text>
                                        </Button>
                                    </View>

                                </Body>

                            </CardItem>
                            <CardItem footer bordered>
                            </CardItem>
                        </Card>
                    </Content>

                </Content>



            </Container>

        );
    }
}
const styles=StyleSheet.create({
    container:{
        paddingLeft:15,
        marginBottom:20,
        paddingBottom:10,

    },
    question:{
        margin: 5 ,
        fontSize: 20,
        textAlign: 'justify',

    },
    button:{
        marginLeft:15,
        color:'#161616',
        fontWeight:'bold',
        margin:10,
        padding:10,

    },
    option_Text:{
        marginLeft: 10,
        color:'#FFFFFF',
        fontWeight:'bold',
        textAlign: 'center',
        width:'80%',


    },
    subtitle:{
        margin: 5 ,
        fontSize: 20,
        textAlign: 'justify',
        color:'red'
    }



})
