import React, { Component } from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab, Card, CardItem, Body, Content} from 'native-base';
import {Image, SafeAreaView, ScrollView,StyleSheet,Text} from "react-native";

class Delta extends Component {
    render() {
        return (
            <Container>
                <Content padder >
                    <Card>
                        <CardItem header bordered  >
                            <Text style={styles.title}>Delta (lineage B.1.617.2) SARS-CoV-2 Delta variant</Text>

                        </CardItem>
                        <CardItem bordered>
                            <Body >
                                <Text style={styles.paragraph1}>
                                    The Delta variant, also known as B.1.617.2, G/452R.V3, 21A or 21A/S:478K, was first discovered in India. Descendant of lineage B.1.617, which also includes the Kappa variant under investigation, it was first discovered in October 2020 and has since spread internationally. On 6 May 2021, British scientists declared B.1.617.2 (which notably lacks mutation at E484Q) as a "variant of concern", labelling it VOC-21APR-02, after they flagged evidence that it spreads more quickly than the original version of the virus and could spread as quickly as Alpha. It carries L452R, T478K and P681R mutations, but unlike Kappa it does not carry E484Q.
                                    On 3 June 2021, Public Health England reported that twelve of the 42 deaths from the Delta variant in England were among the fully vaccinated, and that it was spreading almost twice as fast as the Alpha variant. Also on 11 June, Foothills Medical Centre in Calgary, Canada reported that half of their 22 cases of the Delta variant occurred among the fully vaccinated.
                                    In June 2021, reports began to appear of a variant of Delta with the K417N mutation dubbed the "Nepal variant".The mutation, also present in the Beta variant, has raised concerns about the possibility of reduced effectiveness of vaccines and antibody treatments and increased risk of reinfection. The variant, called "Delta with K417N" by Public Health England, includes two clades corresponding to the Pango lineages AY.1 and AY.2. It has been nicknamed "Delta plus" from "Delta plus K417N". On 22 June, India's Ministry of Health and Family Welfare has declared the "Delta plus" variant of COVID-19 a Variant of Concern after 22 cases of the variant were reported in India. After the announcement, leading virologists said there was insufficient data to support labeling the strain as distinct variant of concern, pointing to the small number of patients studied.

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

export default Delta;
const styles=StyleSheet.create({
    paragraph1:{
        padding:5,
        color:'#6200EE',
        textAlign: 'justify',
        fontSize:15,


    },
    title:{
        fontWeight:'bold',
        color:'#0336FF',
        fontSize:20,
        textTransform:"uppercase"
    }

})