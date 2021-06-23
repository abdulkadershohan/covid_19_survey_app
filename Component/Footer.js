import React, {Component} from 'react';
import {SafeAreaView, ScrollView,} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

class Footer1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            home_active:this.props.home_active,
            trips_active:this.props.trips_active,
            survey_active:this.props.survey_active,
            stats_active:this.props.stats_active
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
                        <Button vertical active={this.state.home_active}
                                onPress={this.onPressHandelHome}>
                            <Icon type="MaterialIcons" name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical active={this.state.trips_active}
                                onPress={this.onPressHandelTrips}
                        >
                            <Icon type="MaterialIcons" name='beenhere' />
                            <Text>Trips</Text>
                        </Button>
                        <Button vertical active={this.state.survey_active}
                                onPress={() => this.props.name.navigation.navigate("Survey")}
                        >
                            <Icon active name="navigate" />
                            <Text>Survey</Text>
                        </Button>
                        <Button vertical active={this.state.stats_active}
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
