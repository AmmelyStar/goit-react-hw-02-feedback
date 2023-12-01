import css from './feedbackOptions/styles.module.css';
import { Component } from 'react';
import Statistics from './statistic/Statictics';
import FeedbackOptions from './feedbackOptions/FeedbackOption';
import { Notification } from 'components/notification/Notification';
import Section from 'components/section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const buttonName = event.target.name;
    this.setState((prev) => ({ [buttonName]: prev[buttonName] + 1 }));
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercent = () => {
    const { good } = this.state;
    const total = this.countTotal();
    const percent = total > 0 ? Math.round((good / total) * 100) : 0;
    return percent;
  };

  render() {
    const total = this.countTotal();
    const percent = this.countPositivePercent();

    return (
      <>
        <h1 className={css.title}>Please leave feedback</h1>
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              percent={percent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;