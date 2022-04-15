import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    this.setState(lastState => ({
      [e.target.value]: lastState[e.target.value] + 1,
    }));
  };
  countTotalFeedback = () => {
    let total = 0;
    total = this.state.good + this.state.neutral + this.state.bad;
    if (total === 0) {
      return 0;
    }
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };
  render() {
    // const total = countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2>Statistics</h2>

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={Object.entries(this.state)}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
