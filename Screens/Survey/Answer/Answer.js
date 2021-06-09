import React from 'react';
import {SafeAreaView, ScrollView,View,Text} from 'react-native';
import SurveyStyle from '../Style/SurveyStyle';
import {Button} from 'native-base';

const Answer = (props) => {
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
               <View style={SurveyStyle.options1}>
                   <Text style={{marginLeft:10,color:'#161616',fontWeight:'bold'}}
                         className=
                             {
                                 props.correctAnswer === qAnswer ?
                                     'correct' :
                                     props.clickedAnswer === qAnswer ?
                                         'incorrect' : ''
                             }
                         onPress={() => props.checkAnswer(qAnswer)}
                         key={qAnswer}>
                       {props.answer[qAnswer]}
                   </Text>
               </View>
        ));

    return (
        <SafeAreaView>
           <ScrollView>
               <View style={SurveyStyle.options2}  disabled={props.clickedAnswer ? true : false} className="Answers">
                   {answers}
               </View>
           </ScrollView>

        </SafeAreaView>
    );
}

export default Answer;
