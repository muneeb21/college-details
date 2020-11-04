import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function Chart (props) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        data: props.data,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
        //   'rgba(153, 102, 255, 1)'
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: props.label
    }
  }

  return <Doughnut data={data} options={options} />
}

export default Chart;