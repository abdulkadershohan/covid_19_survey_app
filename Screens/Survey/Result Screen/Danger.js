import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View, Linking, Image} from 'react-native';
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import Result_Trips from "../../Helth-Trips/Result_Trips";
class Danger extends Component {
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
                        <Title>Red Zone</Title>
                    </Body>
                    <Right />
                </Header>
                   <Content>
                       <View  style={{backgroundColor:'#FFFFFF'}}>

                           <Content padder >
                               <Card>
                                   <CardItem header bordered>
                                       <Text style={{
                                           fontWeight:'bold',
                                           color:'red',
                                           fontSize:20
                                       }}>YOU ARE IN RED ZONE</Text>
                                   </CardItem>
                                   <CardItem bordered>
                                       <Body>
                                           <Image source={require('../../../images/red.png')} style={{height: 350, width: '100%', flex: 1}}/>
                                           <Text style={{
                                               color:'red',
                                               textAlign: 'justify',

                                           }}>
                                               According to our observation your test result is red. This application was created for testing purposes only. Experimental observers should not be given health advice from this application. The software will keep the information you provide confidential. Thank you
                                           </Text>

                                       </Body>
                                   </CardItem>

                                   <TouchableOpacity>
                                       <CardItem footer bordered >
                                           <Left>
                                               <Button   transparent iconRight onPress={() => {
                                                   Linking.openURL('http://corona.gov.bd')
                                               }}
                                               ><Text style={{color:'red',fontWeight:'bold',padding:5,textTransform:"uppercase"}}>Corona Info</Text></Button>
                                           </Left>
                                           <Body>
                                               <Button   transparent  iconRight onPress={() => {
                                                   Linking.openURL('https://www.worldometers.info/coronavirus/')
                                               }}
                                               ><Text style={{color:'red',fontWeight:'bold',textTransform:"uppercase"}}>worldometer</Text></Button>
                                           </Body>
                                           <Right>
                                               <Button   transparent iconRight onPress={() => {
                                                   Linking.openURL('https://www.who.int/')
                                               }}
                                               ><Text style={{color:'red',fontWeight:'bold',padding:5}}>WHO </Text></Button>
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

export default Danger;
