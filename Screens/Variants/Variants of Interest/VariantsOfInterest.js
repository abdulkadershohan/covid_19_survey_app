import React, { Component } from 'react';
import {
    Container,
    Tabs,
    ScrollableTab, Tab, Content, Card, CardItem, Body
} from 'native-base';
import Footer from "../../../Component/Footer";
import {StyleSheet, Text} from "react-native";

class VariantsOfInterest extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>

                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading="Epsilon">
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={styles.title}>Epsilon (lineages B.1.429, B.1.427, CAL.20C)
                                        SARS-CoV-2 Epsilon variant
                                    </Text>

                                </CardItem>
                                <CardItem bordered>
                                    <Body >
                                        <Text style={styles.paragraph1}>
                                            The Epsilon variant or lineage B.1.429, also known as CAL.20C or CA VUI1, 21C or 20C/S:452R, is defined by five distinct mutations (I4205V and D1183Y in the ORF1ab-gene, and S13I, W152C, L452R in the spike protein's S-gene), of which the L452R (previously also detected in other unrelated lineages) was of particular concern. B.1.429 is possibly more transmissible, but further study is necessary to confirm this. CDC has listed B.1.429 and the related B.1.427 as "variants of concern," and cites a preprint for saying that they exhibit a ~20% increase in viral transmissibility, have a "Significant impact on neutralization by some, but not all," therapeutics that have been given Emergency Use Authorization (EUA) by FDA for treatment or prevention of COVID-19, and moderately reduce neutralization by plasma collected by people who have previously infected by the virus or who have received a vaccine against the virus. According to WHO, it has been labelled as Epsilon variant.

                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>

                    </Tab>
                    <Tab heading="Zeta">
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={styles.title}>Zeta (lineage P.2)
                                        SARS-CoV-2 Zeta variant

                                    </Text>

                                </CardItem>
                                <CardItem bordered>
                                    <Body >
                                        <Text style={styles.paragraph1}>
                                            Zeta variant or lineage P.2, a sub-lineage of B.1.1.28 like P.1, was first detected in circulation in the state of Rio de Janeiro; it harbours the E484K mutation, but not the N501Y and K417T mutations. It evolved independently in Rio de Janeiro without being directly related to the Gamma variant from Manaus.
                                            Under the simplified naming scheme proposed by the World Health Organization, P.2 has been labeled Zeta variant', and is considered a variant of interest (VOI), but not yet a variant of concern.

                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>
                    </Tab>
                    <Tab heading="Eta">
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={styles.title}>Eta (lineage B.1.525)

                                    </Text>

                                </CardItem>
                                <CardItem bordered>
                                    <Body >
                                        <Text style={styles.paragraph1}>
                                            The Eta variant or lineage B.1.525, also called VUI-21FEB-03[13] (previously VUI-202102/03) by Public Health England (PHE) and formerly known as UK1188,[13] 21D[20] or 20A/S:484K,[30] does not carry the same N501Y mutation found in Alpha, Beta and Gamma, but carries the same E484K-mutation as found in the Gamma, Zeta, and Beta variants, and also carries the same ΔH69/ΔV70 deletion (a deletion of the amino acids histidine and valine in positions 69 and 70) as found in Alpha, N439K variant (B.1.141 and B.1.258) and Y453F variant (Cluster 5). Eta differs from all other variants by having both the E484K-mutation and a new F888L mutation (a substitution of phenylalanine (F) with leucine (L) in the S2 domain of the spike protein). As of March 5, it had been detected in 23 countries. It has also been reported in Mayotte, the overseas department/region of France. The first cases were detected in December 2020 in the UK and Nigeria, and as of 15 February, it had occurred in the highest frequency among samples in the latter country. As of 24 February, 56 cases were found in the UK. Denmark, which sequences all its COVID-19 cases, found 113 cases of this variant from January 14 to February 21, of which seven were directly related to foreign travels to Nigeria.
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>
                    </Tab>
                    <Tab heading="Theta">
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={styles.title}>Theta (lineage P.3)
                                        SARS-CoV-2 Theta variant


                                    </Text>

                                </CardItem>
                                <CardItem bordered>
                                    <Body >
                                        <Text style={styles.paragraph1}>
                                            On 18 February 2021, the Department of Health of the Philippines confirmed the detection of two mutations of COVID-19 in Central Visayas after samples from patients were sent to undergo genome sequencing. The mutations were later named as E484K and N501Y, which were detected in 37 out of 50 samples, with both mutations co-occurrent in 29 out of these. There were no official names for the variants and the full sequence was yet to be identified. It is also labelled as Theta variant by WHO.

                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>

                    </Tab>
                    <Tab heading="Iota">
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={styles.title}>Iota (lineage B.1.526)
                                        SARS-CoV-2 Iota variant

                                    </Text>

                                </CardItem>
                                <CardItem bordered>
                                    <Body >
                                        <Text style={styles.paragraph1}>
                                            In November 2020, a mutant variant was discovered in New York City, which was named lineage B.1.526. As of April 11, 2021, the variant has been detected in at least 48 U.S. states and 18 countries. In a pattern mirroring Epsilon, Iota was initially able to reach relatively high levels in some states, but in the spring of 2021 it was outcompeted by the more transmissible Alpha. It is labelled as Iota variant by the WHO.

                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>
                    </Tab>
                    <Tab heading="Kappa">
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={styles.title}>Kappa (lineage B.1.617.1)
                                        SARS-CoV-2 Kappa variant
                                    </Text>

                                </CardItem>
                                <CardItem bordered>
                                    <Body >
                                        <Text style={styles.paragraph1}>
                                            Kappa variant is one of the three sublineages of lineage B.1.617. It is also known as lineage B.1.617.1, 21B or 21A/S:154K, and was first detected in India in December 2020. By the end of March 2021, the Kappa variant accounted for more than half of the sequences being submitted from India.[168] On 1 April 2021, it was designated a variant under investigation (VUI-21APR-01) by Public Health England.
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>
                    </Tab>
                    <Tab heading="Lambda">
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={styles.title}>Lambda (lineage C.37)
                                        SARS-CoV-2 Lambda variant

                                    </Text>

                                </CardItem>
                                <CardItem bordered>
                                    <Body >
                                        <Text style={styles.paragraph1}>
                                            The Lambda variant, also known as lineage C.37, was first detected in Peru in August 2020 and was designated by the WHO as a variant of interest on 14 June 2021.
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>
                    </Tab>
                </Tabs>
                <Footer name={this.props}/>
            </Container>
        );
    }
}

export default VariantsOfInterest;
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