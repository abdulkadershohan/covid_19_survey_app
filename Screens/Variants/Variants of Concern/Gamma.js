import React, { Component } from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab, Card, CardItem, Body, Content} from 'native-base';
import {Image, SafeAreaView, ScrollView,StyleSheet,Text} from "react-native";

class Gamma extends Component {
    render() {
        return (
            <Container>
                <Content padder >
                    <Card>
                        <CardItem header bordered  >
                            <Text style={styles.title}>Gamma (lineage P.1)          SARS-CoV-2 Gamma variant</Text>

                        </CardItem>
                        <CardItem bordered>
                            <Body >
                                <Text style={styles.paragraph1}>
                                    The Gamma variant or lineage P.1, termed Variant of Concern 21JAN-02 (formerly VOC-202101/02) by Public Health England, 20J (V3) or 20J/501Y.V3 by Nextstrain, or just 501Y.V3, was detected in Tokyo on 6 January 2021 by the National Institute of Infectious Diseases (NIID). It has been labelled as Gamma variant by WHO. The new variant was first identified in four people who arrived in Tokyo having travelled from the Brazilian Amazonas state on 2 January 2021. On 12 January 2021, the Brazil-UK CADDE Centre confirmed 13 local cases of the new Gamma variant in the Amazon rain forest. This variant of SARS-CoV-2 has been named lineage P.1 (although it is a descendant of B.1.1.28, the name B.1.1.28.1 is not permitted and thus the resultant name is P.1), and has 17 unique amino acid changes, 10 of which in its spike protein, including the three concerning mutations: N501Y, E484K and K417T.
                                    The new variant was absent in samples collected from March to November 2020 in Manaus, Amazonas state, but it was detected for the same city in 42% of the samples from 15–23 December 2020, followed by 52.2% during 15–31 December and 85.4% during 1–9 January 2021. A study found that infections by Gamma can produce nearly ten times more viral load compared to persons infected by one of the other lineages identified in Brazil (B.1.1.28 or B.1.195). Gamma also showed 2.2 times higher transmissibility with the same ability to infect both adults and older persons, suggesting P.1 and P.1-like lineages are more successful at infecting younger humans irrespective of sex.
                                    A study of samples collected in Manaus between November 2020 and January 2021, indicated that the Gamma variant is 1.4–2.2 times more transmissible and was shown to be capable of evading 25–61% of inherited immunity from previous coronavirus diseases, leading to the possibility of reinfection after recovery from an earlier COVID-19 infection. As for the fatality ratio, infections by Gamma were also found to be 10–80% more lethal.
                                    A study found that people fully vaccinated with Pfizer or Moderna have significantly decreased neutralization effect against Gamma, although the actual impact on the course of the disease is uncertain.[121] A pre-print study by the Oswaldo Cruz Foundation published in early April found that the real-world performance of people with the initial dose of the Sinovac's Coronavac Vaccine had approximately 50% efficacy rate. They expected the efficacy to be higher after the 2nd dose. The study is ongoing.
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

export default Gamma;
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