import React, {Component} from 'react';
import {Image, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import Result_Trips from "../../Helth-Trips/Result_Trips";
class Yellow extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='home' />
                        </Button>
                    </Left>
                    <Body>
                        <Title >Yellow Zone</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View  style={{backgroundColor:'#FFFFFF'}} >

                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={{
                                        fontWeight:'bold',
                                        color:'#161616',
                                        fontSize:20
                                    }}>YOU ARE IN YELLOW ZONE</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Image source={require('../../../images/yellow.jpg')} style={{height: 350, width: '100%', flex: 1}}/>
                                        <Text style={{
                                            color:'#161616',
                                            textAlign: 'justify',

                                        }}>
                                            According to our observation your test result is yellow. This application was created for testing purposes only. Experimental observers should not be given health advice from this application. The software will keep the information you provide confidential. Thank you


                                        </Text>

                                    </Body>
                                </CardItem>

                                <TouchableOpacity>
                                    <CardItem footer bordered >
                                        <Left>
                                            <Button   transparent iconRight onPress={() => {
                                                Linking.openURL('http://corona.gov.bd')
                                            }}
                                            ><Text style={{color:'#161616',fontWeight:'bold',padding:5,textTransform:"uppercase"}}>Corona Info</Text></Button>
                                        </Left>
                                        <Body>
                                            <Button   transparent  iconRight onPress={() => {
                                                Linking.openURL('https://www.worldometers.info/coronavirus/')
                                            }}
                                            ><Text style={{color:'#161616',fontWeight:'bold',textTransform:"uppercase"}}>worldometer</Text></Button>
                                        </Body>
                                        <Right>
                                            <Button   transparent iconRight onPress={() => {
                                                Linking.openURL('https://www.who.int/')
                                            }}
                                            ><Text style={{color:'#161616',fontWeight:'bold',padding:5}}>WHO </Text></Button>
                                        </Right>


                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                        </Content>
                        <Result_Trips/>
                    </View>

                </Content>
            </Container>
        );
    }
}

export default Yellow;