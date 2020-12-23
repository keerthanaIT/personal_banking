import React from 'react';

import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [ 30, 70 ],
			options: {
				chart: {
					width: 200,
					type: 'pie'
				},
				markers: {
					shape: <i class="fas fa-diamond" />
				},
				responsive: [
					{
						breakpoint: 480,
						options: {
							chart: {
								width: 200
							},
							legend: {
								position: 'bottom'
							}
						}
					}
				]
			}
		};
	}

	render() {
		return (
			<div id="piechart">
				<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={165} />
			</div>
		);
	}
}

export default PieChart;
