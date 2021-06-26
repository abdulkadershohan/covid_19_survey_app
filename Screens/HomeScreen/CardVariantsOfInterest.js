import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Button, Left, Body,Text } from 'native-base';
import {Image, SafeAreaView, ScrollView,StyleSheet} from "react-native";

class CardVariantsOfInterest extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={{
                marginTop:-25,
                marginBottom:-90
            }}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../images/logo_covid.jpg')} />
                                <Body>
                                    <Text style={{fontWeight:'bold',textTransform:'uppercase'}}>Variants of Interest</Text>
                                    <Text note>Updated 15 June 2021</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../../images/logo_covid.jpg')} style={{height: 200, width: '100%', flex: 1}}/>
                                <Text style={{
                                    paddingTop:10,
                                    textAlign: 'justify'
                                }}>
                                    A SARS-CoV-2 isolate is a Variant of Interest (VOI) if, compared to a reference isolate, its genome has mutations with established or suspected phenotypic implications, and either:
                                </Text>
                                <Text style={styles.paragraph}>i. Has been identified to cause community transmission/multiple COVID-19 cases/clusters, or has been detected in multiple countries; OR</Text>
                                <Text style={styles.paragraph}>ii. Is otherwise assessed to be a VOI by WHO in consultation with the WHO SARS-CoV-2 Virus Evolution Working Group.</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    {/*
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                    */}
                                    <Text onPress={() => this.props.name.navigation.navigate("VariantsOfInterest")}>
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

export default CardVariantsOfInterest;
const styles=StyleSheet.create({
    paragraph:{
        color:'#6200EE',
        margin:10,
        padding:5,
        textAlign: 'justify',

    },


})