import React, {Component} from 'react';
import {SafeAreaView,ScrollView,Text,TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
class InputForm extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Content>
                        <Form>
                            <Item inlineLabel >
                                <Label>Name</Label>
                                <Input keyboardType="text" key="Name"/>
                            </Item>
                            <Item inlineLabel last >
                                <Label>Phone</Label>
                                <Input keyboardType="numeric"
                                       key="Phone"
                                />
                            </Item>
                            <GooglePlacesAutocomplete
                                placeholder='Search'
                                onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    console.log(data, details);
                                }}
                                query={{
                                    key: 'YOUR API KEY',
                                    language: 'en',
                                }}
                            />
                        </Form>
                    </Content>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default InputForm;
