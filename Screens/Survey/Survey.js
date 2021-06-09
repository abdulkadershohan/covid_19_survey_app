import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Container, Header, Content, Card, CardItem, Text, Body, Button, Icon} from 'native-base';
import SurveyHomeTop from './Survey Home/HomeTop';
import SurveyHomeBottom from './Survey Home/HomeBottom';
import SurveyContent from './Survey Content/Content';
class SurveyHome extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                  <SurveyHomeTop />
                  <SurveyHomeBottom/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default SurveyHome;
