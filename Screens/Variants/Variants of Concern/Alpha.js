import React, { Component } from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab, Card, CardItem, Body, Content} from 'native-base';
import {Image, SafeAreaView, ScrollView,StyleSheet,Text} from "react-native";

class Alpha extends Component {
    render() {
        return (
            <Container>
                <Content padder >
                    <Card>
                        <CardItem header bordered  >
                            <Text style={{
                                fontWeight:'bold',
                                color:'#0336FF',
                                fontSize:20,
                                textTransform:"uppercase"
                            }}>Alpha (lineage B.1.1.7) SARS-CoV-2 Alpha variant
                            </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body >
                                <Text style={styles.paragraph1}>First detected in October 2020 during the COVID-19 pandemic in the United Kingdom from a sample taken the previous month in Kent, lineage B.1.1.7, labelled Alpha variant by the WHO, was previously known as the first Variant Under Investigation in December 2020 (VUI – 202012/01) and later notated as VOC-202012/01. It is also known as 20I (V1), 20I/501Y.V1[30] (formerly 20B/501Y.V1), or 501Y.V1. Since then, its prevalence odds have doubled every 6.5 days, the presumed generational interval. It is correlated with a significant increase in the rate of COVID-19 infection in United Kingdom, associated partly with the N501Y mutation There is some evidence that this variant has 40–80% increased transmissibility (with most estimates lying around the middle to higher end of this range), and early analyses suggest an increase in lethality. More recent work has found no evidence of increased virulence. As of May 2021, the Alpha variant has been detected in some 120 countries.</Text>

                            </Body>
                        </CardItem>
                        <CardItem footer bordered ></CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Alpha;
const styles=StyleSheet.create({
    paragraph1:{
        padding:5,
        color:'#6200EE',
        textAlign: 'justify',
        fontSize:15

    }

})