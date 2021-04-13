import React, {Component} from 'react';
import Statistics from './Statistics/Statistics';
import Controls from './Controls/Controls';
import Section from './Section/Section';
import Styles from './App.module.css';

export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onClickFeedback = (event) =>{
		const name = event.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
  }

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedback = () => {
      const {good} = this.state;
      const total = this.countTotal();
      const positiveFeedback = (good/total)*100;
      return Math.round(positiveFeedback);
      };


  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotal();
    const positiveFeedback = this.countPositiveFeedback();
    const feedbacks = Object.keys(this.state);
    return (
      <section className="Statistics">
      <Section title="Please leave feedback">
      <Controls feedbacks={feedbacks} onClickFeedback={this.onClickFeedback}/>
      </Section>
      { total > 0 && ( 
      <Section title="Statistics">
      <Statistics
          good = {good}
          neutral = {neutral}
          bad = {bad}
          total = {total}
          positiveFeedback = {positiveFeedback}
      /></Section>
      )}


      </section>)
  }
}

