import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import {Image} from 'react-native'
class Card1 extends Component {
    render() {
        return (
            <Container  style={{
                marginTop:20
            }}>
                {/*
                <Header>
                    <Text>HEllo</Text>
                </Header>
                */}

                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../images/HandWash.jpg')} />
                                <Body>
                                    <Text>HEALTH TRIPS</Text>
                                    <Text note>April 15, 2020</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../../images/HandWash.jpg')} style={{height: 200, width: '100%', flex: 1}}/>
                                <Text style={{
                                    paddingTop:10,

                                }}>
                                    Protect yourself and others from covid-19. Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Maintain at least 1 meter (3 feet) distance between yourself and others.
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
                                    <Text>
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

export default Card1;
