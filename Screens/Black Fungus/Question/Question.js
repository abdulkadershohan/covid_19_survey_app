import React from 'react';
import {Text} from 'react-native';
import SurveyStyle from '../Style/SurveyStyle';
const Question = (props) => {
    return (
        <Text style={SurveyStyle.questions} >{props.questions}</Text>
    );
}

export default Question;
