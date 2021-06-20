import React, {Component} from 'react';
import {SafeAreaView,ScrollView,Text,TextInput,Picker,TouchableOpacity } from 'react-native';
import { Container, Header,Button, Content, Form, Item, Input, Label } from 'native-base';
import axios from 'axios'
class InputForm extends Component {
    constructor(props) {
        super(props);
        this. state={
            name:'',
            phone:'',
            region:'Dhaka',
            city:'',
            area:'',
            address:'',
            score:this.props.sendScore

        }
    }
    ButtononPressHandel=()=> {
        let error = false;

        if (!this.state.name.trim()) {
            alert("Name can't be empty");
            error = true;
            return;
        }
        else if (!this.state.phone.trim()) {
            alert("Phone can't be empty");
            error = true;
            return;
        }
        else if (this.state.phone.length != 11) {
            alert('Please type Valid phone number')
            error = true;
        }
        else if (!this.state.city.trim()) {
            alert("city can't be empty");
            return;
            error = true;
        }
        else if (!this.state.area.trim()) {
            alert("Area can't be empty");
            error = true;
            return;
        }
        if (error != true) {
            const obj={
                name:this.state.name,
                phone:this.state.phone,
                region:this.state.region,
                city:this.state.city,
                area:this.state.area,
                address:this.state.address,
                score:this.state.score
            }

            axios.post("http://192.168.0.101/COVID-19-SURVEY-APP/insert.php",obj)
                /* .then(res=>console.log(res.data))
                 */
                .then(response=>{
                    console.log(response)
                })
                .catch(error=>{
                    console.log(error)
                })

            this.setState({
                name:'',
                phone:'',
                region:'Dhaka',
                city:'',
                area:'',
                address:'',
                score:''

            })
            if(this.state.score>=3){
                this.props.name.navigation.navigate("Danger")
            }
            else if(this.state.score===2){
                this.props.name.navigation.navigate("Yellow")
            }
            else if(this.state.score<2){
                this.props.name.navigation.navigate("Green")
            }


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
                                <Input keyboardType="text"
                                       key="Name"
                                       placeholder="Type your name here"
                                       value={this.state.name}
                                       onChangeText={(text)=>this.setState({name:text})}
                                />
                            </Item>


                            <Item inlineLabel  >
                                <Label>Phone</Label>
                                <Input keyboardType="numeric"
                                       key="Phone"
                                       maxLength={11}
                                       value={this.state.phone}
                                       onChangeText={(text)=>this.setState({phone:text})}
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
                                       onChangeText={(text)=>this.setState({city:text})}

                                />
                            </Item>
                            <Item inlineLabel >
                                <Label>Area</Label>
                                <Input keyboardType="text"
                                       key="Area"
                                       value={this.state.area}
                                       onChangeText={(text)=>this.setState({area:text})}
                                />
                            </Item>
                            <Item inlineLabel >
                                <Label>Address</Label>
                                <Input keyboardType="text"
                                       key="Address"
                                       value={this.state.address}
                                       onChangeText={(text)=>this.setState({address:text})}
                                />
                            </Item>
                            <TouchableOpacity style={{
                                paddingTop:10,
                                paddingLeft:15,
                            }}>
                                <Button full rounded
                                        onPress={this.ButtononPressHandel}
                                ><Text style={{color:'#FFFFFF'}}>Continue</Text></Button>
                            </TouchableOpacity>

                        </Form>
                    </Content>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default InputForm;
