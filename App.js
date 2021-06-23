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
import Quiz from './Screens/Survey/Survey Content/Content';
import InputForm from './Screens/Form/InputForm';
import Danger from './Screens/Survey/Result Screen/Danger';
import Green from "./Screens/Survey/Result Screen/Green";
import Yellow from "./Screens/Survey/Result Screen/yellow";
const Stack = createStackNavigator();

function App() {
    {/*<NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
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
                                  title: 'HOME',
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
                                  title: 'HOME',
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
                <Stack.Screen name="Quiz" component={Quiz}
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

                              }}/>
                <Stack.Screen name="Stats" component={Stats}
                              options={{
                                  title: 'HOME',
                                  headerStyle: {
                                      backgroundColor:'#6200EE',
                                  },
                                  headerTintColor: '#FFFFFF',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },

                                  headerShown:true

                              }}/>

                <Stack.Screen name="Danger" component={Danger}
                              options={{
                                  title: 'Danger',
                                  headerStyle: {
                                      backgroundColor:'#6200EE',
                                  },
                                  headerTintColor: '#FFFFFF',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },

                                  headerShown:false

                              }}/>
                <Stack.Screen name="Green" component={Green}
                              options={{
                                  title: 'Green',
                                  headerStyle: {
                                      backgroundColor:'#6200EE',
                                  },
                                  headerTintColor: '#FFFFFF',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },

                                  headerShown:false

                              }}/>
                <Stack.Screen name="Yellow" component={Yellow}
                              options={{
                                  title: 'Yellow',
                                  headerStyle: {
                                      backgroundColor:'#6200EE',
                                  },
                                  headerTintColor: '#FFFFFF',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },

                                  headerShown:false

                              }}/>
            </Stack.Navigator>
        </NavigationContainer>*/}
    {/*    <SafeAreaView>
        <ScrollView>
            <Green/>
        </ScrollView>
    </SafeAreaView>*/}
    return (

        <SafeAreaView>
        <ScrollView>
           <Green/>
        </ScrollView>
    </SafeAreaView>




    );
}
export default App;
