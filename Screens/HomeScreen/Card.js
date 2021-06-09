import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Button, Left, Body,Text } from 'native-base';
import {Image,View} from 'react-native'
import Trips from '../Helth-Trips/Trips';
import {SafeAreaView, ScrollView} from 'react-native';
class Card1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Container >
                        <Content>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../images/HandWash.jpg')} />
                                        <Body>
                                            <Text >HEALTH TRIPS</Text>
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

                                            <Text  onPress={() => this.props.name.navigation.navigate("COVID-19 HEALTH TRIPS")}>
                                                Learn More
                                            </Text>
                                        </Button>
                                    </Left>
                                </CardItem>

                            </Card>
                        </Content>
                    </Container>
                </ScrollView>
            </SafeAreaView>



        );
    }
}

export default Card1;
