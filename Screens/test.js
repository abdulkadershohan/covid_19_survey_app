import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Card1 from './HomeScreen/Card';
import {SafeAreaView, ScrollView} from 'react-native';
import Trips from './Helth-Trips/Trips';

class Test extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                   <Trips/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Test;
