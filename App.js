import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/HomeScreen/Home';
import Card1 from './Screens/HomeScreen/Card';
import Trips from './Screens/Helth-Trips/Trips';
import Survey from './Screens/Survey/Survey';
import Stats from './Screens/Live Stats/Stats';


const Stack = createStackNavigator();

function App() {
    return (
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
                        headerShown:true

                    }}
                />
                <Stack.Screen name="Trips" component={Trips} />
                <Stack.Screen name="Survey" component={Survey} />
                <Stack.Screen name="Stats" component={Stats} />




            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
