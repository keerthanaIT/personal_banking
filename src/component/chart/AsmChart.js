
import React from 'react';

import ReactApexChart from 'react-apexcharts';


class AsmChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [42, 47, 52,50],
      options: {
        chart: {
          width: 300,
          type: 'polarArea'
        },
        labels: ['','Accounts', 'Services', 'Markets'],
        // fill: {
        //   opacity: 1
        // },
        fill: {
          colors: ['#E44E42', '#F7D133', '#F5F6FF', '#72D5AC']
        },
        stroke: {
          width: 1,
          colors: ['#E44E42', '#F7D133', '#F5F6FF','#72D5AC']
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'left'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            // enabled: true,
            // shadeTo: 'light',
            // shadeIntensity: 0.6
          }
        }
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart" className="float-right w-50p btm-170">
<ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" width={300} height={250} />
</div>
    )
  }

}
export default AsmChart