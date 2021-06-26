import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Image} from 'react-native'
class Card2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={{
                marginTop:-300
            }}>

                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../images/survey.jpg')} />
                                <Body>
                                    <Text style={{fontWeight:'bold'}}>DIAGNOSE YOUR CHANCES OF GETTING INFECTED</Text>
                                    <Text note>April 28, 2020</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../../images/survey.jpg')} style={{height: 200, width: '100%', flex: 1}}/>
                                <Text style={{
                                    paddingTop:10,
                                    textAlign: 'justify',


                                }}>
                                    Are you infected? Here are some queries about the major symptoms of coronavirus. By answering the questions, you will be able to know about your health condition. During the pandemic situation this process is very safe.
                                 </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    {/*
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                    */}
                                    <Text  onPress={() => this.props.name.navigation.navigate("Survey")}>
                                        Learn More
                                    </Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Card2;
