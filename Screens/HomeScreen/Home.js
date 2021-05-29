import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Hot_Line from './Hot_Line';
import Card1 from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <SafeAreaView>
                <ScrollView>

                    <Hot_Line/>
                    <Card1 name={this.props}/>
                    <Card2 name={this.props}/>
                    <Card3 name={this.props}/>
                </ScrollView>
            </SafeAreaView>


        );
    }
}

export default Home;
