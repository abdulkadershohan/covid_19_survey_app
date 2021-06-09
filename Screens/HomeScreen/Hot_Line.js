import React, { Component } from 'react';
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Icon, } from 'native-base';
import {Linking, View,StyleSheet} from 'react-native';
import MyStyle from '../../Style/MyStyle';

export default class Hot_Line extends Component {
    render() {
        return (
            <View>
                <Content>
                        <List style={MyStyle.colorDanger}>
                            <ListItem style={{justifyContent:'center'}}>
                                <Icon style={{
                                    backgroundColor:'transparent',
                                    fontSize:25,
                                    marginRight:5

                                }}
                                    type="MaterialIcons" name="label" />
                                <Text style={{
                                    color:'#FFFFFF',
                                    textTransform: 'uppercase',
                                    fontWeight:'bold',


                                }}>HOT LINE NUMBERS</Text>
                            </ListItem>
                        </List>


                    <List style={MyStyle.colorSecondary}>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require( '../.././images/icon/national_call_center.jpg' )} />
                            </Left>
                            <Body>
                                <Text style={styles.MyTextSecondary}>National Call Center</Text>
                                <Text style={styles.MyTextSecondary} note>333-1</Text>
                            </Body>
                            <Right>
                                <Icon
                                    onPress={()=>{Linking.openURL(`tel:${'333-1'}`);} }
                                    style={{
                                    backgroundColor:'green',
                                    borderRadius:100,
                                    fontSize:25,
                                        padding:10
                                }} type="MaterialIcons" name="call" />

                            </Right>
                        </ListItem>
                    </List>
                    <List style={MyStyle.colorPrimary}>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require( '../.././images/icon/Health_Portal.jpg' )} />
                            </Left>
                            <Body>
                                <Text  style={styles.MyTextPrimary}>Health Portal</Text>
                                <Text  style={styles.MyTextPrimary} note>16263</Text>
                            </Body>
                            <Right>
                                <Icon
                                    onPress={()=>{Linking.openURL(`tel:${'16263'}`);} }
                                    style={{
                                        backgroundColor:'green',
                                        borderRadius:100,
                                        fontSize:25,
                                        padding:10
                                    }} type="MaterialIcons" name="call" />

                            </Right>
                        </ListItem>
                    </List>
                    <List style={MyStyle.colorSecondary}>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require( '../.././images/icon/iedcr.jpg' )} />
                            </Left>
                            <Body>
                                <Text style={styles.MyTextSecondary}>IEDCR</Text>
                                <Text note style={styles.MyTextSecondary}>10655</Text>
                            </Body>
                            <Right>
                                <Icon
                                    onPress={()=>{Linking.openURL(`tel:${'10655'}`);} }
                                    style={{
                                        backgroundColor:'green',
                                        borderRadius:100,
                                        fontSize:25,
                                        padding:10
                                    }} type="MaterialIcons" name="call" />

                            </Right>
                        </ListItem>
                    </List>
                    <List style={MyStyle.colorPrimary}>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require( '../.././images/icon/COVID-19_Telehealth.jpg' )} />
                            </Left>
                            <Body>
                                <Text  style={styles.MyTextPrimary}>COVID-19 Telehealth</Text>
                                <Text  style={styles.MyTextPrimary} note>09666777222</Text>
                            </Body>
                            <Right>
                                <Icon
                                    onPress={()=>{Linking.openURL(`tel:${'09666777222'}`);} }
                                    style={{
                                        backgroundColor:'green',
                                        borderRadius:100,
                                        fontSize:25,
                                        padding:10
                                    }} type="MaterialIcons" name="call" />

                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    MyTextPrimary:{
        color:'#FFFFFF',
        textTransform: 'uppercase',
        fontWeight:'bold',


    },
    MyTextSecondary:{
        color:'#161616',
        textTransform: 'uppercase',
        fontWeight:'bold',


    },

})
