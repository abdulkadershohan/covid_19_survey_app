import React, {Component} from 'react';
import {BackHandler} from 'react-native'
import {Container, Header, Content, FooterTab, Button, Icon, Text, Badge, Left, Body, Title, Right} from 'native-base';
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
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='home' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{
                            color:"#FFFFFF",
                            fontWeight:'bold'
                        }}>COVID-19 SURVEY APP</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress ={()=>BackHandler.exitApp()}>
                            <Icon name='power' />
                        </Button>
                    </Right>

                </Header>
                <Content>
                    <Hot_Line/>
                    <Card1 name={this.props}/>
                    <Card2 name={this.props}/>
                    <Card3 name={this.props}/>
                </Content>
                <Footer1 name={this.props}   home_active={true}/>

            </Container>



        );
    }
}

export default Home;
