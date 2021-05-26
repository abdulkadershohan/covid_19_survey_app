import React from 'react';
import { Text,SafeAreaView, View } from 'react-native';
import Home from './Pages/Home page/Home';
import {ScrollView} from 'react-native'
import Trips from './Pages/Helth-Trips/Trips';
const App = () => {
  return (
      <SafeAreaView style={{
          backgroundColor:'#FFDE03',
          height:'100%',
          width:'100%'
      }}>
          <ScrollView>
              <Trips/>

              {/*<Home/> */}

          </ScrollView>






      </SafeAreaView>
  )
}
export default App;
