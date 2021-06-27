import React from 'react';
import {SafeAreaView, ScrollView,View,Text} from 'react-native';
import SurveyStyle from '../Style/SurveyStyle';
import {Button} from 'native-base';

const Answer = (props) => {
    let answers = Object.keys(props.answer)

        .map((qAnswer, i) => (
            <View style={SurveyStyle.options1}  key={qAnswer}>
                <Button  primary disabled={props.clickedAnswer ? true : false}
                         style={SurveyStyle.ButtonOption}
                         onPress={() => props.checkAnswer(qAnswer)}
                         key={qAnswer}

                ><Text style={{ marginLeft: 10,  color:'#FFFFFF',fontWeight:'bold'}}>{props.answer[qAnswer]}</Text>
                </Button>

            </View>
        ));

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={SurveyStyle.options2}>
                    {answers}
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

export default Answer;
