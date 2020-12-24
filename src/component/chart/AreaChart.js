import React from 'react';
import {Circle } from 'rc-progress';
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: 'series1',
					data: [ 1200,1600,2500,2000,2000,2000,2100,2000,3500,3800,3800,4500,4800,4500,4000 ]
				}
			],
			options: {
				chart: {
					height: 350,
					type: 'area'
				},
				colors: [ '#6573ed' ],
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth'
				},
				legend: {
					position: 'bottom',
				},
				yaxis: {
					type: 'number',
					categories: [1000, 3000, 6000]
				},

				xaxis: {
					labels: {
						show: false
					}
				}
			}
		};
	}

	render() {
		return (
			<div id="chart" className="float-right w-55p btm-275">
						<ReactApexChart
							options={this.state.options}
							series={this.state.series}
							type="area"
							width={350}
							height={200}
						/>
						<span className="display-in">
							<Circle percent="65" trailWidth="15" strokeWidth="15" strokeColor="#6573ED" />
							<span className="rate font-b dark-gray-color fs-14"><i class="fas fa-dollar-sign"></i>840.00</span>
							<i class="fas fa-long-arrow-alt-right rate-in-aro_1"></i>
							<Circle percent="66" trailWidth="12" strokeWidth="12" strokeColor="#A2EBD6" />
							<span className="rate font-b light-gray-color fs-14"><i class="fas fa-dollar-sign"></i>460.00</span>
							<i class="fas fa-long-arrow-alt-right light-gray-color rate-in-aro_2"></i>
						</span>
					</div>
		);
	}
}

export default PieChart;
