import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, Picker, TouchableOpacity, View, Linking} from 'react-native';
import {Body, Button, Card, CardItem, Content, Header, Icon, Left, Right, Title} from "native-base";
class Danger extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View>
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
                        <Content padder>
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
                                        <Text style={{
                                            color:'#6200EE',
                                            fontSize:20,

                                        }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, beatae distinctio fuga ipsam iste modi mollitia nisi obcaecati placeat sint, sit temporibus velit veniam. Accusamus ad at, commodi corporis iusto laboriosam mollitia nobis omnis, quaerat quas quasi sequi ut voluptates! Architecto at esse fugiat laborum rem sapiente velit veniam voluptas!

                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered >
                                    <Left>
                                        <Button rounded  primary iconRight onPress={() => {
                                            Linking.openURL('http://corona.gov.bd')
                                        }}
                                        ><Text style={{color:'#FFFFFF',fontWeight:'bold',padding:5}}> Corona Info  </Text></Button>
                                    </Left>
                                    <Body>
                                        <Button rounded  primary iconRight onPress={() => {
                                            Linking.openURL('https://www.worldometers.info/coronavirus/')
                                        }}
                                        ><Text style={{color:'#FFFFFF',fontWeight:'bold',padding:5}}> worldometers </Text></Button>
                                    </Body>
                                    <Right>
                                        <Button rounded  primary iconRight onPress={() => {
                                            Linking.openURL('https://www.who.int/')
                                        }}
                                        ><Text style={{color:'#FFFFFF',fontWeight:'bold',padding:5}}> WHO </Text></Button>
                                    </Right>


                                </CardItem>


                            </Card>
                        </Content>

                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Danger;
