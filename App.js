import React from 'react';
import { Text,SafeAreaView, View } from 'react-native';
import Home from './Pages/Home page/Home';
import {ScrollView} from 'react-native'
const App = () => {
  return (
      <SafeAreaView style={{
          backgroundColor:'white',
          height:'100%',
          width:'100%'
      }}>
          <ScrollView>
              <Home/>
          </ScrollView>






      </SafeAreaView>
  )
}
export default App;
