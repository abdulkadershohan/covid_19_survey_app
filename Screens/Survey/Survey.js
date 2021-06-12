import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Container, Header, Content, Card, CardItem, Text, Body, Button, Icon} from 'native-base';
import SurveyHomeTop from './Survey Home/HomeTop';
import SurveyHomeBottom from './Survey Home/HomeBottom';
import SurveyContent from './Survey Content/Content';
import Footer1 from '../../Component/Footer';
class SurveyHome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Content>
                    <SurveyHomeTop name={this.props}/>
                    <SurveyHomeBottom/>
                </Content>
                <Footer1 name={this.props}/>
            </Container>

        );
    }
}


export default SurveyHome;
