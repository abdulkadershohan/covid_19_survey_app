import React, {Component} from 'react';
import {SafeAreaView, ScrollView,View,Text,StyleSheet,KeyboardAvoidingView} from 'react-native';
import {Container, Header, Content, FooterTab, Button, Icon, Badge, Card, CardItem, Body} from 'native-base';
import SurveyStyle from '../Style/SurveyStyle';
import Question from "../Questions/Question";
import Answer from "../Answer/Answer";
import InputForm from "../../Form/InputForm";
import Footer1 from "../../../Component/Footer";





export default class QuizBlackFungus extends Component {
    constructor(props) {
        super(props);
        this.state={
            quiestions:{
                1: 'How old are you?',
                2: 'Select your gender',
                3: 'I feel facial swelling of the face ',
                4: 'I have a headache I agreed ',
                5: 'Do you have Nasal or sinus congestion',
                6: 'Black lesions on nasal bridge or upper inside of mouth that quickly become more severe',
                7: 'I have fever or Cough or Chest pain or Shortness of breath now',
                8: 'I feel Abdominal pain',
                9: 'I feel nauseous',
                10: "I agree I'm having gastrointestinal bleeding",

            },
            answers: {
                1: {
                    1: '0-20',
                    2: '21-30',
                    3: '31-40',
                    4: '41-50',
                    5: '51-65',
                    6: '65+'
                },
                2: {
                    1: 'Male',
                    2: 'Female',
                    3: 'Other'
                },
                3: {
                    1: 'Yes I Agreed',
                    2: 'No'

                },
                4: {
                    1: 'Yes',
                    2: 'No'
                },
                5:{
                    1: 'Yes',
                    2: 'No'
                },
                6: {
                    1: 'Yes',
                    2: 'No'
                },
                7:{
                    1: 'Yes',
                    2: 'No'
                },
                8:{
                    1: 'Agreed',
                    2: 'Disagreed'
                },
                9:{
                    1: 'Yes',
                    2: 'No'
                },
                10:{
                    1: 'Yes',
                    2: 'No'
                },

            },
            correctAnswers: {
                1: '0',
                2: '0',
                3: '1',
                4: '1',
                5: '1',
                6: '1',
                7: '1',
                8: '1',
                9: '1',
                10: '1',
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            buttonName: 'Next',
            result:''
        }

    }
    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }

    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
        const {score,buttonName } = this.state;
        if(score===3 || step===9 ){

            this.setState({
                buttonName: 'Finish',

            })
        }
        if(buttonName==='Finish'){
            this.setState({
                step:11,
            })
        }
        if(this.state.score>=3)
        {
            this.setState({
                result:'High'
            })
        }else if(this.state.score===2){
            this.setState({
                result:'Average'
            })
        }
        else {
            this.setState({
                result:'Low'
            })
        }
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <Container>
                <Content>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{
                                    fontWeight:'bold',
                                    fontSize:20,
                                    textTransform:"uppercase"
                                }}>Black Fungus Risk Test</Text>
                            </CardItem>

                            <View>
                                {step <= Object.keys(quiestions).length ?
                                    (<>
                                        <Question
                                            question={quiestions[step]}
                                        />
                                        <Answer
                                            answer={answers[step]}
                                            step={step}
                                            checkAnswer={this.checkAnswer}
                                            correctAnswer={correctAnswer}
                                            clickedAnswer={clickedAnswer}
                                        />
                                        <Button success style={{
                                            width:80,
                                            marginLeft:50,
                                            padding:20,

                                        }}
                                                disabled={
                                                    clickedAnswer && Object.keys(quiestions).length >= step ? false : true
                                                }
                                                onPress={() => this.nextStep(step)}><Text style={SurveyStyle.Button}>{this.state.buttonName}</Text></Button>
                                    </>) : (
                                        <View >
                                            <Text style={{
                                                color:'green',
                                                textAlign:'center',
                                                fontSize:20,
                                                fontWeight:'bold',
                                                paddingTop:10
                                            }}>You have completed the Survey!</Text>
                                            <Text style={{
                                                color:'red',
                                                textAlign:'center',
                                                padding:20,
                                                fontSize:15,
                                                fontWeight:'bold',
                                            }}>Your Risk Test Result is : {this.state.result}</Text>

                                        </View>


                                    )
                                }
                            </View>



                            <CardItem style={{marginTop:20}} footer bordered>
                            </CardItem>
                        </Card>
                    </Content>
                </Content>
                <Footer1 name={this.props} />
            </Container>

        );
    }
}
