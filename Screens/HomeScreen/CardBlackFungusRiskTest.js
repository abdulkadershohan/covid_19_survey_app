import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Button, Left, Body,Text } from 'native-base';
import {Image,View} from 'react-native'
import Trips from '../Helth-Trips/Trips';
import {SafeAreaView, ScrollView} from 'react-native';
class CardBlackFungusRiskTest extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                    <Container style={{
                        marginTop:-250
                    }}>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../images/logo_covid.jpg')} />
                                        <Body>
                                            <Text style={{fontWeight:'bold'}}>BLACK FUNGUS RISK TEST</Text>
                                            <Text note>June 20, 2021</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Image source={require('../../images/Black_Fungus_img.jpg')} style={{height: 200, width: '100%', flex: 1}}/>
                                        <Text style={{
                                            paddingTop:10,
                                            textAlign: 'justify',
                                        }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur doloribus eaque eveniet, illo laboriosam numquam reiciendis sed similique voluptatum!
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button transparent textStyle={{color: '#87838B'}}>

                                            <Text  onPress={() => this.props.name.navigation.navigate("BeforeBlackFungusTest")}>
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

export default CardBlackFungusRiskTest;
