import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './Home-Commits.css';

class HomeCommits extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  getData = () => {
    if (!this.props.userData.commits) {
      return {
        datasets: [{
          data: []
        }]
      };
    }

    const { commits } = this.props.userData;
    return {
      datasets: [{
        borderColor: 'rgba(52, 54, 66, 0.6)',
        data: commits
      }]
    };
  }

  getOptions = () => {
    const options = {
      maintainAspectRatio: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'time',
          gridLines: {
            color: 'rgba(52, 54, 66, 0.6)',
            zeroLineColor: 'rgba(52, 54, 66, 0.9)'
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          type: 'linear',
          gridLines: {
            color: 'rgba(52, 54, 66, 0.8)',
            zeroLineColor: 'rgba(52, 54, 66, 0.9)'
          },
          ticks: {
            beginAtZero: true,
            autoSkip: true,
            maxTicksLimit: 6
          },
          scaleLabel: {
            display: true,
            labelString: 'Commits',
            fontSize: 16
          }
        }]
      },
      elements: {
        point: {
          radius: 5,
          backgroundColor: '#348899',
          hoverRadius: 6
        }
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const date = new Date(data.datasets[0].data[tooltipItem.index].x);
            const commits = data.datasets[0].data[tooltipItem.index].y;
            const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
            return `${commits} - ${formattedDate}`;
          },
          title: () => ''
        }
      }
    };
    return options;
  }

  render() {
    if (this.props.userData && this.props.userData.commits) {
      return (
        <div className="Commits col">
          <p className="Commits-title">Recent Commits</p>
          <Line
            data={ this.getData() }
            options={ this.getOptions() }
            width={ 280 }
            height={ 140 }
          />
        </div>
      );
    }
    return '';
  }
}

export default HomeCommits;
