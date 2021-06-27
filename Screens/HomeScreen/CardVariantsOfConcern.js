import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Button, Left, Body,Text } from 'native-base';
import {Image, SafeAreaView, ScrollView,StyleSheet} from "react-native";
class CardVariantsOfConcern extends Component {
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
                                    <Text style={{fontWeight:'bold',textTransform:'uppercase'}}>Variants of Concern</Text>
                                    <Text note>Updated 15 June 2021</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../../images/Variants_of_Concern.jpg')} style={{height: 200, width: '100%', flex: 1}}/>
                                <Text style={{
                                    paddingTop:10,
                                    textAlign: 'justify'
                                }}>
                                    A SARS-CoV-2 variant that meets the definition of a VOI (see below) and, through a comparative assessment, has been demonstrated to be associated with one or more of the following changes at a degree of global public health significance:
                                </Text>
                                <Text style={styles.paragraph}>i. Increase in transmissibility or detrimental change in COVID-19 epidemiology; or </Text>
                                <Text style={styles.paragraph}>ii. Increase in virulence or change in clinical disease presentation; or </Text>
                                <Text style={styles.paragraph}>iii. Decrease in effectiveness of public health and social measures or available diagnostics, vaccines, therapeutics.</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    {/*
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                    */}
                                    <Text onPress={() => this.props.name.navigation.navigate("VariantsOfConcern")}>
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
export default CardVariantsOfConcern;
const styles=StyleSheet.create({
    paragraph:{
        color:'#6200EE',
        margin:10,
        padding:5,
        textAlign: 'justify',

    },


})