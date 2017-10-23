import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

const BMI = (props) => {
  const { steps } = props;
  const height = steps.height.value;
  const weight = steps.weight.value;
  const bmi = Number(((weight / (height * height)) * 10000).toFixed(1));
  let result = 'Underweight';

  if (bmi >= 18.5 && bmi < 25) {
    result = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    result = 'Overweight';
  } else if (bmi >= 30) {
    result = 'Obesity';
  }

  return (
    <div className="test">
      Your BMI is {bmi} ({result})
    </div>
  );
};

BMI.propTypes = {
  steps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

BMI.defaultProps = {
  steps: undefined,
};

class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    function trigger(value) {
      if ((value.value.indexOf('trainings') > 0) && (value.value.indexOf('incident') > 0) && (value.value.indexOf('management') > 0)) {
        return '4';
      } else if ((value.value.indexOf('trainings') > 0) && (value.value.indexOf('access') > 0) && (value.value.indexOf('MOSAIC') > 0)) {
        return '5';
      } else if ((value.value.indexOf('trainings') > 0) && (value.value.indexOf('related') > 0) && (value.value.indexOf('Service Now') > 0)) {
        return '6';
      } else if ((value.value.indexOf('trainings') > 0) && (value.value.indexOf('related') > 0) && (value.value.indexOf('ITQMS') > 0)) {
        return '7';
      } else if ((value.value.indexOf('Thank You') > -1)) {
        return '8';
      }
      return false;
    }

    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Welcome to Merck chatbot!!!',
            trigger: '2',
          },
          {
            id: '2',
            message: 'How can i help you ?!?',
            trigger: '3',
          },
          {
            id: '3',
            user: true,
            trigger,
          },
          {
            id: '4',
            message: 'ITINM_A - Foundation & ITINM_B - Advanced',
            trigger: '3',
          },
          {
            id: '5',
            message: 'R&D-Global Compound Logistic-Mosaic-Chemist-RC , R&D-Global Compound Logistic-Mosaic-Admin-RC , R&D-Global Compound Logistic-Mosaic-CL-Operator-RC , R&D-Global Compound Logistic-Mosaic-Requestor-RC',
            trigger: '3',
          },
          {
            id: '6',
            message: 'Training ID: I-43156 , I-43155 , I-43154 , I-43153',
            trigger: '3',
          },
          {
            id: '7',
            message: 'Training ID: 20185106, 20191630',
            trigger: '3',
          },
          {
            id: '8',
            message: 'Happy To Help, Bye:)',
            end: true,
          },
        ]}
      />
    );
  }
}

export default Home;
