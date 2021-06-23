import React, {useEffect,useState} from 'react';
import {SafeAreaView, ScrollView,View,StyleSheet} from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Input,
    Right,
    Label, Item,
} from 'native-base';
import axios from 'axios';
import Footer1 from '../../Component/Footer';



function Stats(props) {
        const [latest,setLatest]=useState("");
        const [results,setResult]=useState([])
        const [searchCountry,setSearchCountry]=useState("")
        const [defaultCountry,setDefaultCountry]=useState("")
    useEffect(()=>{
        axios
            .all([
                axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
                axios.get("https://disease.sh/v3/covid-19/countries")

            ])
            .then(responseArr=>{
                setLatest(responseArr[0].data);
                setResult(responseArr[1].data)
            })
            .catch(err=>{
                console.log(err);
            });

    },[]);
    const date=new Date(parseInt(latest.updated));
    const lastUpdated =date.toString();
    const filterCountry=results.filter(item=>{
       // return item.country==="Bangladesh"

            return searchCountry !==""?item.country.includes(searchCountry):item

    })
    const countries=filterCountry.map((data, i)=>{

        return (
            <View kye={i}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: data.countryInfo.flag}} />
                                <Body>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:'bold',
                                        color: "#161616",
                                        textTransform:'uppercase'
                                    }}>{data.country}</Text>
                                </Body>
                            </Left>
                        </CardItem>


                        <CardItem>
                            <Left>
                                <Body  style={{
                                    alignItems:'center',
                                    paddingBottom:10,
                                    marginTop:-15,

                                }}>
                                    <Text style={{color: "#161616"}}>Active : {data.cases}</Text>
                                    <Text style={{color: "red"}}>Deaths : {data.deaths}</Text>
                                    <Text style={{color: "green"}}>Recovered : {data.recovered}</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Body  style={{
                                    alignItems:'center',
                                    paddingBottom:10,
                                    paddingTop:5

                                }}>
                                    <Text style={{color: "#161616"}}>Today's Cases : {data.todayCases}</Text>
                                    <Text style={{color: "red"}}>Today's deaths : {data.todaysDeaths}</Text>
                                    <Text style={{color: "green"}}>Active : {data.active}</Text>
                                    <Text style={{color: "red"}}>Critical : {data.critical}</Text>
                                </Body>
                            </Right>


                        </CardItem>
                    </Card>
                </Content>
            </View>

        );

    });
        return (
                <Container>
                    <Content style={{backgroundColor:"#FFFFFF"}}>
                            <Text style={styles.Title}>World Live Stats</Text>
                        <View style={styles.container}>
                            <View style={styles.active}>
                                <Text style={styles.text}>
                                    Cases
                                </Text>
                                <Text style={styles.score}>{latest.cases}</Text>

                            </View>
                            <View style={styles.Deaths}>
                                <Text style={styles.text}>
                                    Deaths
                                </Text>
                                <Text style={styles.score}>{latest.deaths}</Text>

                            </View>
                            <View style={styles.Recovered}>
                                <Text style={styles.text}>
                                    Recovered
                                </Text>
                                <Text style={styles.score}>{latest.recovered}</Text>

                            </View>


                        </View>
                        <Text style={{
                            textAlign:'center',
                            color:'green',
                            margin:20,
                            fontWeight:'bold'
                        }}>Last Updated : {lastUpdated}</Text>
                        <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search Country"   onChangeText={(text)=>setSearchCountry(text)}/>
                              
                                <Icon name="earth" />

                            </Item>

                        </Header>
                        {/* <View>
                            {countries}
                        </View>*/}




                    </Content>

                    <Footer1 name={props} stats_active={true} />
                </Container>

        );
    }



export default Stats;
const styles=StyleSheet.create({
    container:{
        height: 200,
        width: null,
        flex: 9,
        display:'flex',
        flexDirection:'row',

    },

    Title:{
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
        fontSize:20,
        textTransform:'uppercase',

    },
    score:{
        textAlign:'center',
        position:'relative',
        top:50,
        fontWeight:'bold',
        fontSize:20,
        textTransform:'uppercase',

    },
    Deaths:{
        flex:3,
        backgroundColor:'red',
        borderRadius:20,
        margin:5

    },
    active:{
        flex:3,
        backgroundColor:'gray',
        borderRadius:20,
        margin:5
    },
    Recovered:{
        flex:3,
        backgroundColor:'green',
        borderRadius:20,
        margin:5
    },
    text:{
        color:"#FFFFFF",
        textAlign:'center',
        position:'relative',
        top:20,
        fontWeight:'bold',
        fontSize:20,
        textTransform:'uppercase',

    }
})


