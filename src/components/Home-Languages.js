import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import ColorHash from 'color-hash';
import './Home-Languages.css';

class HomeLanguages extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.colorHash = new ColorHash();
  }

  getData = () => {
    const { userLanguagePercents } = this.props.userData;
    userLanguagePercents.sort((lang1, lang2) => lang2.percent - lang1.percent);
    const data = {
      labels: userLanguagePercents.map(lang => `${lang.name} ${lang.percent}%`),
      datasets: [
        {
          backgroundColor: userLanguagePercents.map((lang, index) => this.colorHash.hex(lang.name)),
          data: userLanguagePercents.map(lang => lang.percent)
        }
      ]
    };
    return data;
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
