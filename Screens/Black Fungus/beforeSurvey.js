import React, {Component} from 'react';
import {Linking, SafeAreaView, ScrollView} from 'react-native';
import {Container, Header, Content, Card, CardItem, Text, Body, Button, Icon} from 'native-base';

import Footer1 from '../../Component/Footer';
class BeforeSurvey extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
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
                                    <Text style={{
                                        textAlign: 'justify',
                                        color:'#3700B3'
                                    }}>
                                        Welcome.This tool allows you to assess for yourself whether you are at risk of being infected with the Black Fungus.
                                        This application was created for testing purposes only.
                                        Experimental observers should not be given health advice from this software.
                                        The application will keep the information you provide confidential.

                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Button bordered  success iconRight
                                ><Text onPress={() => this.props.name.navigation.navigate("Quiz")}> Get Started </Text><Icon name='arrow-forward' /></Button>
                            </CardItem>
                        </Card>
                    </Content>
                </Content>
                <Footer1 name={this.props} survey_active={true}/>
            </Container>

        );
    }
}


export default BeforeSurvey;
