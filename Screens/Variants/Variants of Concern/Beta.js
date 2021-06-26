import React, { Component } from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab, Card, CardItem, Body, Content} from 'native-base';
import {Image, SafeAreaView, ScrollView,StyleSheet,Text} from "react-native";

class Beta extends Component {
    render() {
        return (
            <Container>
                <Content padder >
                    <Card>
                        <CardItem header bordered  >
                            <Text style={styles.title}>Beta (lineage B.1.351)  SARS-CoV-2 Beta variant</Text>

                        </CardItem>
                        <CardItem bordered>
                            <Body >
                                <Text style={styles.paragraph1}>
                                    On 18 December 2020, the 501.V2 variant, also known as 501.V2, 20H (V2), 20H/501Y.V2 (formerly 20C/501Y.V2), 501Y.V2,VOC-20DEC-02 (formerly VOC-202012/02), or lineage B.1.351, was first detected in South Africa and reported by the country's health department.It has been labelled as Beta variant by WHO. Researchers and officials reported that the prevalence of the variant was higher among young people with no underlying health conditions, and by comparison with other variants it is more frequently resulting in serious illness in those cases. The South African health department also indicated that the variant may be driving the second wave of the COVID-19 epidemic in the country due to the variant spreading at a more rapid pace than other earlier variants of the virus.
                                    Scientists noted that the variant contains several mutations that allow it to attach more easily to human cells because of the following three mutations in the receptor-binding domain (RBD) in the spike glycoprotein of the virus: N501Y, K417N, and E484K.The N501Y mutation has also been detected in the United Kingdom.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered ></CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Beta;
const styles=StyleSheet.create({
    paragraph1:{
        padding:5,
        color:'#6200EE',
        textAlign: 'justify',
        fontSize:15

    },
        title:{
        fontWeight:'bold',
        color:'#0336FF',
        fontSize:20,
        textTransform:"uppercase"
}

})