import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import React, { useState } from 'react';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0); 
  function countGood()  {
    setGood(good + 1)
  }
  function countNeutral()  {
    setNeutral(neutral + 1)
  }
   function countBad()  {
    setBad(bad + 1)
  }
  const countTotal = () => {
    let total = 0;
    total = good + neutral + bad;
    if (total === 0) {
      return 0;
    }
    return total
  }
  const positivePercentage = () => {
     if (good === 0) {
      return 0;
    }
    return ((good / countTotal()) * 100).toFixed();
  };
  
  

  return (
    <div>
    <Section title="Please leave feedback" />
      <FeedbackOptions countGood={countGood} countNeutral={countNeutral} countBad={countBad} />
  
        {countTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
           good={good} bad={bad} neutral={neutral} total={countTotal()} positivePercentage={positivePercentage()}
          />
        )}
    </div>
    
  )
}

