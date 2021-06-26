import React, {Component} from 'react';
import {Linking, SafeAreaView, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import MyStyle from '../../../Style/MyStyle';
class SurveyHomeTop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                        <Content padder>
                            <Card>
                                <CardItem header bordered>
                                    <Text style={{
                                        fontWeight:'bold'
                                    }}>COVID-19 SURVEY</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={{
                                            textAlign: 'justify',
                                            color:'#3700B3'
                                        }}>
                                            Welcome.This tool allows you to assess for yourself whether you are at risk of being infected with the Covid-19 or Novel Corona virus, as well as the level of risk and what to do.
                                            This application was created for testing purposes only.
                                            Experimental observers should not be given health advice from this software.
                                            The software will keep the information you provide confidential.

                                           <Text style={{color:'green'}} onPress={() => {
                                               Linking.openURL('http://corona.gov.bd');
                                           }}>REFERENCE corona.gov.bd </Text>
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered>
                                    <Button bordered  success iconRight
                                    ><Text onPress={() => this.props.name.navigation.navigate("Quiz")}> Get Started </Text><Icon name='arrow-forward' /></Button>
                                </CardItem>
                            </Card>
                        </Content>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default SurveyHomeTop;
