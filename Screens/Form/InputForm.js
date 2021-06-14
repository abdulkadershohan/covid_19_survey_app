import React, {Component} from 'react';
import {SafeAreaView,ScrollView,Text,TextInput,Picker,TouchableOpacity } from 'react-native';
import { Container, Header,Button, Content, Form, Item, Input, Label } from 'native-base';

class InputForm extends Component {
    state={
        name:'',
        phone:'',
        region:'Dhaka',
        city:'',
        area:'',
        address:'',
    }
    ButtononPressHandel=()=>{
        alert(this.state.name)


        this.setState({
            name:'',
            phone:'',
            region:'Dhaka',
            city:'',
            area:'',
            address:''
        })
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
                                <Input keyboardType="text"
                                       key="Name"
                                       value={this.state.name}
                                       onChange={(text)=>this.setState({name:text})}

                                />
                            </Item>
                            <Item inlineLabel  >
                                <Label>Phone</Label>
                                <Input keyboardType="numeric"
                                       key="Phone"
                                       value={this.state.phone}
                                       onChange={(text)=>this.setState({phone:text})}
                                />
                            </Item>
                            <Item inlineLabel>
                                <Label>Region</Label>
                                <Picker
                                    selectedValue={this.state.region}
                                    style={{ height: 50, width: 150 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.state.region=itemValue

                                    }
                                >
                                    <Picker.Item  label="Dhaka" value="Dhaka" />
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
                                <Label>City</Label>
                                <Input keyboardType="text"
                                       key="City"
                                       value={this.state.city}
                                       onChange={(text)=>this.setState({city:text})}

                                />
                            </Item>
                            <Item inlineLabel >
                                <Label>Area</Label>
                                <Input keyboardType="text"
                                       key="Area"
                                       value={this.state.area}
                                       onChange={(text)=>this.setState({area:text})}
                                />
                            </Item>
                            <Item inlineLabel >
                                <Label>Address</Label>
                                <Input keyboardType="text"
                                       key="Address"
                                       value={this.state.address}
                                       onChange={(text)=>this.setState({address:text})}
                                />
                            </Item>
                            <TouchableOpacity style={{
                                paddingTop:10,
                                paddingLeft:15,
                            }}>
                                <Button full rounded
                                        onPress={this.ButtononPressHandel}
                                ><Text>Continue</Text></Button>
                            </TouchableOpacity>

                        </Form>
                    </Content>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default InputForm;
