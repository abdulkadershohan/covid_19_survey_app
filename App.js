import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/HomeScreen/Home';
import Card1 from './Screens/HomeScreen/Card';
import Trips from './Screens/Helth-Trips/Trips';
import Survey from './Screens/Survey/Survey';
import Stats from './Screens/Live Stats/Stats';
import {SafeAreaView,ScrollView,Text} from 'react-native';
import Content from './Screens/Survey/Survey Content/Content';



const Stack = createStackNavigator();

function App() {
    {/*
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'COVID-19 SURVEY APP',
                        headerStyle: {
                            backgroundColor:'#6200EE',
                        },
                        headerTintColor: '#FFFFFF',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitleAlign:'center',
                        headerShown:false

                    }}
                />
                <Stack.Screen name="COVID-19 HEALTH TRIPS" component={Trips}
                              options={{
                                  title: 'COVID-19 HEALTH TRIPS',
                                  headerStyle: {
                                      backgroundColor:'#6200EE',
                                  },
                                  headerTintColor: '#FFFFFF',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                                  headerShown:true

                              }}
                />
                <Stack.Screen name="Survey" component={Survey}
                              options={{
                                  title: 'COVID-19 SURVEY',
                                  headerStyle: {
                                      backgroundColor:'#6200EE',
                                  },
                                  headerTintColor: '#FFFFFF',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },

                                  headerShown:true

                              }}

                />
                <Stack.Screen name="Stats" component={Stats} />




            </Stack.Navigator>
        </NavigationContainer>
        */}
    return (
        <SafeAreaView>
            <ScrollView>
                <Content/>

            </ScrollView>
        </SafeAreaView>


    );
}

export default App;
