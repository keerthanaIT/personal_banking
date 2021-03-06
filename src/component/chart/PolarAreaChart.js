import React from 'react';

import ReactApexChart from 'react-apexcharts';
import PieChart from './PieChart';

class PolarAreaChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [42, 35, 52, 50],
			options: {
				chart: {
					width: 300,
					type: 'polarArea'
				},
				labels: ['', 'Accounts', 'Services', 'Markets'],
				// fill: {
				//   opacity: 1
				// },
				fill: {
					colors: ['#F7D133', '#72D5AC', '#F5F6FF', '#E44E42']
				},
				stroke: {
					width: 1,
					colors: ['#F7D133', '#72D5AC', '#F5F6FF', '#E44E42']
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
				// theme: {
				// 	monochrome: {
				// 		enabled: true,
				// 		shadeTo: 'light',
				// 		shadeIntensity: 0.6
				// 	}
				// }
			}
		};
	}

	render() {
		return (
			<div>
				<div id="polarchart" className="float-right w-50p btm-170">
					<ReactApexChart
						options={this.state.options}
						series={this.state.series}
						type="polarArea"
						width={300}
						height={250}
					/>

					<p className="chart_badge bg-white position-a box-shadow w-5p br-25p fs-8 ">60%</p>
					<p className="chart_badge service_bg bg-white position-a box-shadow w-5p br-25p fs-8">22%</p>
					<p className="chart_badge account_bg bg-white position-a box-shadow w-5p br-25p fs-8">18%</p>
					<PieChart />
				</div>
			</div>
		);
	}
}
export default PolarAreaChart;
