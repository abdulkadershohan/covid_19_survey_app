import React, {Component} from 'react';
import {Image, Linking, Pressable, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Container, Header, Content, Card, CardItem, Text, Body, Button, Icon} from 'native-base';

import Footer1 from '../../Component/Footer';
class BeforeBlackFungusTest extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Content>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{
                                    fontWeight:'bold',
                                    fontSize:20,
                                    textTransform:'uppercase'
                                }}>Black Fungus Risk Test</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text style={{
                                        textAlign: 'justify',
                                        color:'#3700B3'
                                    }}>
                                        Welcome.This tool allows you to assess for yourself whether you are at risk of being infected with the Black Fungus.
                                        This application was created for testing purposes only.
                                        Experimental observers should not be given health advice from this software.
                                        The application will keep the information you provide confidential.

                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Button bordered  success iconRight
                                ><Text onPress={() => this.props.navigation.navigate("QuizBlackFungus")}> Get Started </Text><Icon name='arrow-forward' /></Button>
                            </CardItem>
                        </Card>
                    </Content>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{
                                    fontWeight:'bold',
                                    fontSize:20,
                                    textTransform:'uppercase'
                                }}>reference</Text>
                            </CardItem>
                            <CardItem bordered>

                                   <Body>
                                       <Text style={styles.text}>1. Petrikkos G, Skiada A, Lortholary O, Roilides E, Walsh TJ, Kontoyiannis DP.<Text style={{color:'blue'}} onPress={() => {
                                           Linking.openURL('https://pubmed.ncbi.nlm.nih.gov/22247442/');
                                       }}> Epidemiology and clinical manifestations of mucormycosisexternal </Text> Clin Infect Dis. 2012 Feb;54 Suppl 1:S23-34</Text>

                                       <Text style={styles.text}>2. Lewis RE, Kontoyiannis DP.<Text style={{color:'blue'}} onPress={() => {
                                           Linking.openURL('https://pubmed.ncbi.nlm.nih.gov/24020743/');
                                       }}> Epidemiology and treatment of mucormycosisexternal </Text>Future Microbiol. 2013 Sep;8(9):1163-75.</Text>
                                       <Text style={styles.text}>3. Spellberg B, Edwards Jr. J, Ibrahim A. <Text style={{color:'blue'}} onPress={() => {
                                           Linking.openURL('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1195964/');
                                       }}>Novel perspectives on mucormycosis: pathophysiology, presentation, and managementexternal </Text> Clin Microbiol Rev. 2005 Jul;18(3):556-69.</Text>
                                       <Text style={styles.text}>4. Ribes JA, Vanover-Sams CL, Baker DJ.<Text style={{color:'blue'}} onPress={() => {
                                           Linking.openURL('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC100153/');
                                       }}> Zygomycetes in human disease</Text> Clin Microbiol Rev 2000; 13:236-301.</Text>
                                       <Text style={styles.text}>5. Centers for Disease Control and Prevention <Text style={{color:'blue'}} onPress={() => {Linking.openURL('https://www.cdc.gov/fungal/diseases/mucormycosis/symptoms.html');}}>Symptoms of Mucormycosis</Text> CDC24/7:Saving Lives,Proctecting People</Text>
                                   </Body>
                            </CardItem>
                            <CardItem footer bordered></CardItem>
                        </Card>
                    </Content>


                </Content>
                <Footer1 name={this.props} />
            </Container>

        );
    }
}


export default BeforeBlackFungusTest;
const styles=StyleSheet.create({
    text:{
        padding:10,
        textAlign:'justify',
        color:'red'
    }
})