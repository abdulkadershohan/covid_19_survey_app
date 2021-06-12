import React, {Component} from 'react';
import {SafeAreaView, ScrollView,} from 'react-native';
import { Container, Header, Content, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import Hot_Line from './Hot_Line';
import Card1 from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import Footer1 from '../../Component/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }} />
                <Content>
                    <Hot_Line/>
                    <Card1 name={this.props}/>
                    <Card2 name={this.props}/>
                    <Card3 name={this.props}/>
                </Content>
                <Footer1 name={this.props}/>

            </Container>



        );
    }
}

export default Home;
