import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Image} from 'react-native'
class Card3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={{
                marginTop:-293
            }}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../images/WorldMap.jpg')} />
                                <Body>
                                    <Text style={{fontWeight:'bold'}}>WORLD LIVE STATES</Text>
                                    <Text note>April 28, 2020</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../../images/WorldMap.jpg')} style={{height: 200, width: '100%', flex: 1}}/>
                                <Text style={{
                                    paddingTop:10,
                                    textAlign: 'justify',



                                }}>
                                    World live stats will provides information about coronavirus real time update. You can see the active cases, deaths and recover worldwide. By searching you can know details about a particular countries. You can search also by scrolling.
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
                                    <Text onPress={() => this.props.name.navigation.navigate("Stats")}>
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

export default Card3;
