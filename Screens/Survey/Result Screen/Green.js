import React, {Component} from 'react';
import {
    Image,
    ImageBackground,
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Content,
    Card,
    CardItem,
    ListItem, Thumbnail, List
} from 'native-base';
class Green extends Component {
       render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View >
                        <Header>
                            <Left>
                                <Button transparent>
                                    <Icon name='home' />
                                </Button>
                            </Left>
                            <Body>
                                <Title>Green Zone</Title>
                            </Body>
                            <Right />
                        </Header>
                        <Content padder >
                            <Card>
                                <CardItem header bordered>
                                    <Text style={{
                                        fontWeight:'bold',
                                        color:'green',
                                        fontSize:20
                                    }}>YOU ARE IN GREEN ZONE</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Image source={require('../../../images/green.jpg')} style={{height: 350, width: '100%', flex: 1}}/>
                                        <Text style={{
                                            color:'green',
                                            fontSize:20,

                                        }}>
                                            According to our observation your test result is green. This application was created for testing purposes only. Experimental observers should not be given health advice from this application. The software will keep the information you provide confidential. Thank you

                                        </Text>

                                    </Body>
                                </CardItem>

                                <TouchableOpacity>
                                    <CardItem footer bordered >
                                        <Left>
                                            <Button   transparent iconRight onPress={() => {
                                                Linking.openURL('http://corona.gov.bd')
                                            }}
                                            ><Text style={{color:'green',fontWeight:'bold',padding:5,textTransform:"uppercase"}}>Corona Info</Text></Button>
                                        </Left>
                                        <Body>
                                            <Button   transparent  iconRight onPress={() => {
                                                Linking.openURL('https://www.worldometers.info/coronavirus/')
                                            }}
                                            ><Text style={{color:'green',fontWeight:'bold',textTransform:"uppercase"}}>worldometer</Text></Button>
                                        </Body>
                                        <Right>
                                            <Button   transparent iconRight onPress={() => {
                                                Linking.openURL('https://www.who.int/')
                                            }}
                                            ><Text style={{color:'green',fontWeight:'bold',padding:5}}>WHO </Text></Button>
                                        </Right>
                                    </CardItem>
                                </TouchableOpacity>

                            </Card>
                        </Content>
                    </View>

                </ScrollView>
            </SafeAreaView>


        );
    }
}

export default Green;
