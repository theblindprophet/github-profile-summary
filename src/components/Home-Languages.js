import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { COLORS } from '../constants';
import './Home-Languages.css';

class HomeLanguages extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.simpleHash = this.simpleHash.bind(this);
  }

  getData = () => {
    const { userLanguagePercents } = this.props.userData;
    userLanguagePercents.sort((lang1, lang2) => lang2.percent - lang1.percent);
    const data = {
      labels: userLanguagePercents.map(lang => `${lang.name} ${lang.percent}%`),
      datasets: [
        {
          backgroundColor: userLanguagePercents.map((lang, index) => COLORS[this.simpleHash(lang.name) % COLORS.length]),
          data: userLanguagePercents.map(lang => lang.percent)
        }
      ]
    };
    return data;
  }

  // Java String hashcode implementation
  simpleHash = (s) => {
    let hash = 0;
    if (s.length === 0) return hash;
    for (let i = 0; i < s.length; i++) {
      let char = s.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  getOptions = () => {
    const options = {
      maintainAspectRatio: false,
      animation: {
        animateScale: true
      },
      elements: {
        arc: {
          borderColor: 'rgba(52, 54, 66, 0.9)'
        }
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => `${data.labels[tooltipItem.index]}`
        }
      }
    };
    return options;
  }

  render() {
    if (this.props.userData && this.props.userData.userLanguagePercents) {
      return (
        <div className="Languages col">
          <p className="Languages-title">Language Spread</p>
          <Pie width={ 285 } height={ 285 } data={ this.getData() } options={ this.getOptions() } />
        </div>
      );
    }
    return '';
  }
}

export default HomeLanguages;
