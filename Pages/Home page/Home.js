import React, {Component} from 'react';
import {SafeAreaView, Linking, View, FlatList, StyleSheet, Text, StatusBar, ScrollView} from 'react-native';
import CardHome from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

const DATA = [
    {
        id: 'hotline-1',
        title: 'National Call Center',
        no:'333-1'
    },
    {
        id: 'hotline-2',
        title: 'Health Portal',
        no:'16263'
    },
    {
        id: 'hotline-3',
        title: 'IEDCR',
        no:'10655'
    },
    {
        id: 'hotline-4',
        title: 'COVID-19 Telehealth',
        no:'09666777222'
    },
];

const Item = ({ title,no }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.box}>
            <View>
                <Text style={styles.number}>{no}</Text>
            </View>
            <View style={styles.btnCallNow}>
                <Text

                    onPress={()=>{Linking.openURL(`tel:${no}`);} }
                    title="Call Now"
                    color="#292b2c"
                >Call Now
                </Text>


            </View>
        </View>



    </View>
);
class Home extends Component {

    render() {
        const renderItem = ({ item,no }) => (
            <Item title={item.title} no={item.no}/>
        );
        return (
                <SafeAreaView style={styles.container}>
                    <Text style={{
                        color:'red',
                        fontWeight:'bold',
                        fontSize: 24,
                        textAlign:'center'
                    }}>HOT LINE NUMBERS</Text>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    <CardHome/>
                    <Card2/>
                    <Card3/>
                </SafeAreaView>



        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'orange',
        borderRadius:15,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    number:{
        textAlign:'center',
        fontSize: 32,
        color:'#17d1ac',
        paddingLeft:50
    },

    title: {
        fontSize: 32,
        color:'black',
        fontWeight:'bold',
        textAlign:'center',

    },
    btnCallNow:{
        width: "auto",
        margin: 10,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 360,
        marginRight:20,

    },
    box:{
        flexDirection:'row',
        justifyContent:'space-between',

    }

});

export default Home;
