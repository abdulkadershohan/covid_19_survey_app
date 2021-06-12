import React, {Component} from 'react';
import {SafeAreaView, ScrollView,} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

class Footer1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            home:'true',
            trips:'',
            survey:'',
            live:''
        }

    }
    onPressHandelHome=()=>{
        this.props.name.navigation.navigate("Home")
        this.state.home='true'
        this.state.trips=''
        this.state.survey=''
        this.state.live=''

    }
    onPressHandelTrips=()=>{
        this.props.name.navigation.navigate("COVID-19 HEALTH TRIPS")
        this.state.home=''
        this.state.trips='a'
        this.state.survey=''
        this.state.live=''

    }


    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button vertical active={this.state.home ? true : false}

                               onPress={this.onPressHandelHome}

                        >
                            <Icon type="MaterialIcons" name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical
                                onPress={this.onPressHandelTrips}
                        >
                            <Icon type="MaterialIcons" name='beenhere' />
                            <Text>Trips</Text>
                        </Button>
                        <Button vertical
                                onPress={() => this.props.name.navigation.navigate("Survey")}
                        >
                            <Icon active name="navigate" />
                            <Text>Survey</Text>
                        </Button>
                        <Button vertical
                                onPress={() => this.props.name.navigation.navigate("Stats")}
                        >
                            <Icon name="earth" />
                            <Text>Live Stats</Text>
                        </Button>
                    </FooterTab>
                </Footer>


        );
    }
}

export default Footer1;
