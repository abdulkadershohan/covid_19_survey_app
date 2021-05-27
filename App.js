import React from 'react';
import { Text,SafeAreaView, View } from 'react-native';
import {ScrollView} from 'react-native'
import Trips from './Pages/Helth-Trips/Trips';
import HotLine from './Pages/Home page/Hot_Line';
import Card1 from './Pages/Home page/Card';
import Card2 from './Pages/Home page/Card2';
import Card3 from './Pages/Home page/Card3';
const App = () => {
  return (
      <SafeAreaView>
          <ScrollView>

              <HotLine/>
              <Card1/>
              <Card2/>
              <Card3/>
              <Trips/>

          </ScrollView>






      </SafeAreaView>
  )
}
export default App;
