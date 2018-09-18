import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './Home-Languages.css';

const colors = ['#555662', '#3c93a3', '#5fbacc', '#3b3c4b', '#9a9a9a', '#323238', '#063740', '#d2d2d2'];

class HomeLanguages extends Component {

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  getData = () => {
    const userLanguagePercents = this.props.userData.userLanguagePercents;
    const data = {
      labels: userLanguagePercents.map(lang => `${lang.name} ${lang.percent}%`),
      datasets: [
        {
          backgroundColor: userLanguagePercents.map((lang, index) => colors[index % colors.length]),
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
          label: (tooltipItem, data) => {
            return `${data.labels[tooltipItem.index]}`;
          }
        }
      }
    };
    return options;
  }

  render() {
    if (this.props.userData && this.props.userData.userLanguagePercents) {
      return (
        <div className="Languages col">
          <Pie width={285} height={285} data={this.getData()} options={this.getOptions()}></Pie>
        </div>
      );
    }
    return '';
  }
}

export default HomeLanguages;
