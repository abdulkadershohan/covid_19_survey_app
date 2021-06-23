import React, { Component } from 'react';
import {Container, Body,Title, Header, Content,  ListItem, Text } from 'native-base';
import {View} from 'react-native';
import styles from '../.././Style/MyStyle'
import {SafeAreaView, ScrollView} from 'react-native';
import Footer1 from '../../Component/Footer';

export default class Trips extends Component {
   state={
        trips_1:{
            title:'PROTECT YOURSELF AND OTHERS FROM COVID-19',
            1:'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.',
            2:'Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.',
            3:'Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COVID-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).',
            4:'Governments should encourage the general public to wear a fabric mask if there is widespread community transmission, and especially where physical distancing cannot be maintained. Why? Masks are a key tool in a comprehensive approach to the fight against COVID-19.',
            5:'Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.',
            6:'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.',
            7:'Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.',
            8:'If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.',
            9:'Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.'

        },
       trips_2:{
            title: 'SAFE USE OF ALCOHOL-BASED HAND SANITIZERS',
            1:'Keep alcohol-based hand sanitizers out of children’s reach. Teach them how to apply the sanitizer and monitor its use.',
            2:'Apply a coin-sized amount on your hands. There is no need to use a large amount of the product.',
            3:'Avoid touching your eyes, mouth and nose immediately after using an alcohol-based hand sanitizer, as it can cause irritation.',
            4:'Hand sanitizers recommended to protect against COVID-19 are alcohol-based and therefore can be flammable. Do not use before handling fire or cooking.',
            5:'Under no circumstance, drink or let children swallow an alcohol-based hand sanitizer. It can be poisonous.',
            6:'Remember that washing your hands with soap and water is also effective against COVID-19.',
            7:'To protect yourself and others against COVID-19, clean your hands frequently and thoroughly. Use alcohol-based hand sanitizer or wash your hands with soap and water. If you use an alcohol-based hand sanitizer, make sure you use and store it carefully.',


       }

    }
    render() {
        return (
            <Container>
                <Content >
                                <Header style={{
                                    backgroundColor:'#FFFFFF'
                                }
                                }>
                                    <Body>
                                        <Title>

                                            <Text
                                                style={{
                                                    color:'#161616',
                                                    fontWeight:'bold',
                                                    textAlign:'center',

                                                }}
                                            >{this.state.trips_1.title} </Text>
                                        </Title>

                                    </Body>
                                </Header>


                                <ListItem style={styles.colorPrimary} last>
                                    <Text style={styles.TextPrimary}>{this.state.trips_1['1']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorSecondary} last>
                                    <Text style={styles.TextSecondary}>{this.state.trips_1['2']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorPrimary} last>
                                    <Text style={styles.TextPrimary}>{this.state.trips_1['3']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorSecondary} last>
                                    <Text style={styles.TextSecondary}>{this.state.trips_1['4']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorPrimary} last>
                                    <Text style={styles.TextPrimary}>{this.state.trips_1['5']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorSecondary} last>
                                    <Text style={styles.TextSecondary}>{this.state.trips_1['6']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorPrimary} last>
                                    <Text style={styles.TextPrimary}>{this.state.trips_1['7']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorSecondary} last>
                                    <Text style={styles.TextSecondary}>{this.state.trips_1['8']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorPrimary} last>
                                    <Text style={styles.TextPrimary}>{this.state.trips_1['9']}</Text>
                                </ListItem>


                                <Body style={{
                                    height:50,
                                }}>
                                    <Title style={{paddingTop:15}}>

                                        <Text
                                            style={{
                                                color:'#161616',
                                                fontWeight:'bold',


                                            }}
                                        >{this.state.trips_2.title} </Text>
                                    </Title>

                                </Body>

                                <ListItem style={styles.colorSecondary} last>
                                    <Text style={styles.TextSecondary}>{this.state.trips_2['1']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorPrimary} last>
                                    <Text style={styles.TextPrimary}>{this.state.trips_2['2']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorSecondary} last>
                                    <Text style={styles.TextSecondary}>{this.state.trips_2['3']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorPrimary} last>
                                    <Text style={styles.TextPrimary}>{this.state.trips_2['4']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorSecondary} last>
                                    <Text style={styles.TextSecondary}>{this.state.trips_2['5']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorPrimary} last>
                                    <Text style={styles.TextPrimary}>{this.state.trips_2['6']}</Text>
                                </ListItem>
                                <ListItem style={styles.colorSecondary} last>
                                    <Text style={styles.TextSecondary}>{this.state.trips_2['7']}</Text>
                                </ListItem>



                            </Content>
                <Footer1 name={this.props} trips_active={true}/>
            </Container>


        );
    }
}
