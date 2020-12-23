import React from 'react';
import '../../asserts/style/Overview.css';

import ReactApexChart from 'react-apexcharts';
import PieChart from './PieChart';

class AsmChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [ 42, 35, 52, 50 ],
			options: {
				chart: {
					width: 300,
					type: 'polarArea'
				},
				labels: [ '', 'Accounts', 'Services', 'Markets' ],
				// fill: {
				//   opacity: 1
				// },
				fill: {
					colors: [ '#E44E42', '#F7D133', '#F5F6FF', '#72D5AC' ]
				},
				stroke: {
					width: 1,
					colors: [ '#E44E42', '#F7D133', '#F5F6FF', '#72D5AC' ]
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
			}
		};
	}

	render() {
		return (
			<div>
				<div id="chart" className="float-right w-50p btm-170">
					<ReactApexChart
						options={this.state.options}
						series={this.state.series}
						type="polarArea"
						width={300}
						height={250}
					/>

					<p className="chart_badge">60%</p>
					<p className="chart_badge service_bg">22%</p>
					<p className="chart_badge account_bg">18%</p>
					<PieChart />
				</div>
			</div>
		);
	}
}
export default AsmChart;
