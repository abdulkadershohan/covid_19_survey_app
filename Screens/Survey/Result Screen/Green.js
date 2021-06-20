import React, {Component} from 'react';
import {SafeAreaView,ScrollView,Text} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import Footer from "../../../Component/Footer";
import {createStackNavigator} from "@react-navigation/stack";
class Green extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>navigation.navigate("Home")}>
                            <Icon name='home' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Green Zone</Title>
                    </Body>
                    <Right />
                </Header>
                <Footer/>
            </Container>
        );
    }
}

export default Green;