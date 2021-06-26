import React, { Component } from 'react';
import {
    Container,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Button,
    Left,
    Body,
    Text,
    Header,
    Tabs,
    ScrollableTab, Tab
} from 'native-base';
import {Image, SafeAreaView, ScrollView} from "react-native";
import Alpha from "./Alpha";
import Beta from "./Beta";
import Gamma from "./Gamma";
import Delta from "./Delta";
import Footer from "../../../Component/Footer";

class VariantsOfConcern extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>

                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading="Alpha">
                        <Alpha/>

                    </Tab>
                    <Tab heading="Beta ">
                        <Beta/>

                    </Tab>
                    <Tab heading="Gamma">
                        <Gamma/>

                    </Tab>
                    <Tab heading="Delta">
                        <Delta/>

                    </Tab>
                </Tabs>
                <Footer name={this.props}/>
            </Container>
        );
    }
}

export default VariantsOfConcern;