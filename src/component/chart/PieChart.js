import React from 'react';

import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [30, 70],
			options: {
				chart: {
					width: 200,
					type: 'pie'
				},
				markers: {
					shape: <i className="fas fa-diamond" />
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
			<div id="piechart" className="position-r p-r-0 box-shadow w-15p br-50p p-2p">
				<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={80} />
			</div>
		);
	}
}

export default PieChart;
