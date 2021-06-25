import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View, Linking, StyleSheet} from 'react-native';
import {Body, Card, CardItem, Content} from "native-base";


class ResultTrips extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View >
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={{
                                        fontWeight:'bold',
                                        color:'#0336FF',
                                        fontSize:20,
                                        textTransform:"uppercase"
                                    }}>Preventions and precautions to take:</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body >
                                         <Text style={styles.paragraph1}>i. Wash your hands frequently with soap and water (more than 20 seconds at a time).</Text>
                                         <Text style={styles.paragraph1}>ii. You can use sanitizer if necessary.</Text>
                                         <Text style={styles.paragraph1}>iii. Avoid public gatherings unless absolutely necessary, try to stay home most of the time.</Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={{
                                        fontWeight:'bold',
                                        color:'#0336FF',
                                        fontSize:20,
                                        textTransform:"uppercase"
                                    }}>Prevention and Precautions - General Defensive Measures:</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={styles.paragraph}>Be aware, check out the latest updates from the following websites regularly: World Health Organization & IEDCR
                                            Most people who are infected experience a mild illness and recover, but it can be more serious in some cases. Take care of your health and protect others by doing the following:</Text>
                                        <Text style={styles.title}> Keep washing your hands frequently</Text>
                                        <Text style={styles.paragraph} > Wash your hands with hand sanitizer or soap.</Text>
                                        <Text style={styles.title}>Maintain social distance</Text>
                                        <Text style={styles.paragraph} >Keep a distance of at least 2 meters (6 feet) with someone who is coughing or sneezing.</Text>
                                        <Text  style={styles.title} >Avoid touching the eyes, nose and mouth</Text>
                                        <Text style={styles.paragraph} >You can come in contact with the virus by touching anything with your hands. The virus can enter the body from your hands through your eyes, nose or mouth.</Text>
                                        <Text style={styles.title}>Practice sneezing cough etiquette</Text>
                                        <Text style={styles.paragraph}>Keep in mind that people around you are following the etiquette of sneezing and coughing. This means that whenever someone sneezes or coughs, the face and nose should be covered with a curved elbow or tissue. Hands should be washed immediately or used tissue should be discarded in a covered wastebin.</Text>
                                        <Text style={styles.title}>If you have a fever, cough and difficulty breathing, seek medical attention immediately</Text>
                                        <Text style={styles.paragraph}>Stay home if you feel sick. If you have a high fever, moderate to severe cough and difficulty breathing and it gets worse in a short time, seek medical attention and call any one of the IEDCR hotlines.</Text>

                                    </Body>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>

                            </Card>
                        </Content>
                        <Content padder >
                            <Card>
                                <CardItem header bordered  >
                                    <Text style={{
                                        fontWeight:'bold',
                                        color:'#0336FF',
                                        fontSize:20,
                                        textTransform:"uppercase"
                                    }}>Contact if necessary:</Text>
                                </CardItem>

                                <CardItem bordered>
                                    <View style={{ flex: 3 , flexDirection: "row"}} >
                                        <View style={{ flex: 1 }}>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801550064904'}`);} }>01550064904</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801550064905'}`);} }>01550064905</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801944333222'}`);} }>01944333222</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${' +8801937000011'}`);} }> 01937000011</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${' +8801937110011'}`);} }> 01937110011</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801927711784'}`);} }>01927711784</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801927711785'}`);} }>01927711785</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801401184551'}`);} }>01401184551</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801401184554'}`);} }>01401184554</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801401184555'}`);} }>01401184555</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801401184556'}`);} }>01401184556</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801401184559'}`);} }>01401184559 </Text>

                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text onPress={()=>{Linking.openURL(`tel:${' +8801401184560'}`);} }>01401184560</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801401184563  '}`);} }>01401184563</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801401184568'}`);} }>01401184568</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801550064901 '}`);} }>01550064901</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801550064902'}`);} }>01550064902</Text>
                                            <Text onPress={()=>{Linking.openURL(`tel:${'+8801550064903'}`);} }>01550064903</Text>
                                        </View>
                                    </View>
                                </CardItem>
                                <CardItem footer bordered ></CardItem>
                            </Card>
                        </Content>

                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default ResultTrips;
const styles=StyleSheet.create({
    paragraph1:{
        padding:5,
        color:'#6200EE',
        textAlign: 'justify',

    },
    paragraph:{
        color:'red',
        margin:10,
        padding:5,
        textAlign: 'justify',

    },

    title:{
        padding:5,
        margin: 10,
        color:'#3700B3',
        fontWeight:"bold",
        textTransform:"uppercase",
        fontSize:15
    },

})