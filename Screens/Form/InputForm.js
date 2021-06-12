import React, {Component} from 'react';
import {SafeAreaView,ScrollView,Text,TextInput,Picker } from 'react-native';
import { Container, Header,Button, Content, Form, Item, Input, Label } from 'native-base';
class InputForm extends Component {
    state={
        Region:'',
        thana:{
            1:'Adabor',
            2:'Uttar Khan'
        }
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Content>
                        <Text  style={{
                            color:'#161616',
                            marginLeft:15,
                            fontSize:20,
                            fontWeight:'bold',
                            paddingTop:10
                        }}>
                            Fill out the Form to Continue
                        </Text>
                        <Form>
                            <Item inlineLabel >
                                <Label>Name</Label>
                                <Input keyboardType="text" key="Name"/>
                            </Item>
                            <Item inlineLabel  >
                                <Label>Phone</Label>
                                <Input keyboardType="numeric"
                                       key="Phone"
                                />
                            </Item>
                            <Item inlineLabel>
                                <Label>Region</Label>
                                <Picker
                                    selectedValue={this.state.Region}
                                    style={{ height: 50, width: 150 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.state.Region=itemIndex

                                    }
                                >
                                    <Picker.Item label="Dhaka" value="Dhaka" />
                                    <Picker.Item label="Chittagong" value="Chittagong" />
                                    <Picker.Item label="Rajshahi" value="Rajshahi" />
                                    <Picker.Item label="Rangpur" value="Rangpur" />
                                    <Picker.Item label="Sylhet" value="Sylhet" />
                                    <Picker.Item label="Khulna" value="Khulna" />
                                    <Picker.Item label="Barishal" value="Barishal" />
                                    <Picker.Item label="Mymensingh" value="Mymensingh" />
                                </Picker>
                            </Item>
                            <Item inlineLabel >
                                <Label>Thana</Label>
                                <Input keyboardType="text" key="Thana"/>
                            </Item>

                        </Form>
                    </Content>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default InputForm;
