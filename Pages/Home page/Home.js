import React, {Component,useState} from 'react';
import {View, Button, SafeAreaView, ScrollView, Text, Linking, StyleSheet} from 'react-native';
import Hot_Line from './Hot_Line';
import Card1 from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

class Home extends Component {

    render() {

        return (

              <SafeAreaView>
                  <ScrollView>
                  <Hot_Line/>
                  <Card1/>
                  <Card2/>
                  <Card3/>
                  </ScrollView>
              </SafeAreaView>


        );
    }
}

export default Home;

const styles=StyleSheet.create({
    MyTextPrimary:{
        color:'#FFFFFF',
        textTransform: 'uppercase',
        fontWeight:'bold',


    },
    MyTextSecondary:{
        color:'#161616',
        textTransform: 'uppercase',
        fontWeight:'bold',


    },

})
