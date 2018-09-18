import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import './Home-Commits.css';

class HomeCommits extends Component {

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  getData = () => {
    const commits = [
      {
        x: '2018-08-15T04:00:00.000Z',
        y: 2
      },
      {
        x: '2018-08-16T04:00:00.000Z',
        y: 10
      },
      {
        x: '2018-08-17T04:00:00.000Z',
        y: 12
      },
      {
        x: '2018-08-18T04:00:00.000Z',
        y: 4
      },
      {
        x: '2018-08-19T04:00:00.000Z',
        y: 0
      },
      {
        x: '2018-08-20T04:00:00.000Z',
        y: 7
      },
      {
        x: '2018-08-21T04:00:00.000Z',
        y: 2
      },
      {
        x: '2018-08-22T04:00:00.000Z',
        y: 10
      },
      {
        x: '2018-08-23T04:00:00.000Z',
        y: 12
      },
      {
        x: '2018-08-24T04:00:00.000Z',
        y: 4
      },
      {
        x: '2018-08-25T04:00:00.000Z',
        y: 0
      },
      {
        x: '2018-08-26T04:00:00.000Z',
        y: 7
      }
    ]
    const data = {
      datasets: [{
        label: 'Scatter Dataset',
        data: commits
      }]
    };
    return data;
  }

  getOptions = () => {
    const options = {
      maintainAspectRatio: false,
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
            autoSkip: true,
            maxTicksLimit: 6
          },
          scaleLabel: {
            display: true,
            labelString: 'Commits'
          },
          drawBorder: true
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
            const formattedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
            return `${commits} - ${formattedDate}`;
          }
        }
      }
    };
    return options;
  }

  render() {
    return (
      <div className="Commits col">
        <Scatter data={this.getData()} options={this.getOptions()} width={280} height={240}></Scatter>
      </div>
    );
  }
}

export default HomeCommits;
