import React from 'react';
import '../asserts/style/style.css';
import '../asserts/js/task.js';
import Tabs, { TabPane } from 'rc-tabs';
import { Line, Circle } from 'rc-progress';
import ReactApexChart from 'react-apexcharts';
import AsmChart from '../component/chart/AsmChart';

var callback = function(key){};

class Overview extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: 'series1',
					data: [ 1000, 2000, 3000 ]
				},
			],
			options: {
				chart: {
					height: 350,
					type: 'area'
				},
				colors:['#6573ed'],
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: 'smooth'
				},
				yaxis: {
					type: 'number',
					categories: []				
				},

				xaxis:{
					labels: {
						show: false
					}
				}
			}
		};
	}
	render() {
		return (
			<div className=" col-lg-6">
				<h2 className="m-0 ov-title-p">Overview</h2>
				<div className="personal-bank-box">
				<button type="button" className="float-right card-button">+ Card</button>
					<h3>Personal Banking</h3>
					<Tabs defaultActiveKey="2" onChange={callback}>
						<TabPane tab="Reports" key="1">
							<div className="debit_card">
								<h4>Debit Card</h4>
								<h2>$ 13801.23</h2>
								<h6>3789 **** **** 3930</h6>
							</div>
						</TabPane>
						<TabPane tab="Activity" key="2" className="display-in">
						<div className="debit_card">
								<h4>Debit Card</h4>
								<h2>$ 13801.23</h2>
								<h6>3789 **** **** 3930</h6>
							</div>
							<AsmChart />
						</TabPane>
						<TabPane tab="Bills" key="3">
							third
						</TabPane>
					</Tabs>
				</div>
				<h3  className="ov-title-p">Weekly Statistics</h3>
				<div className="display-in">
				<ul>
					<li>
						<span>Taxi</span>
						<span className="float-right">68%</span>
						<Line percent="68" trailWidth="4" strokeWidth="4" strokeColor="#E44E42" />
					</li>
					<li>
						<span>Games</span>
						<span className="float-right">44%</span>
						<Line percent="44" trailWidth="4" strokeWidth="4" strokeColor="#F7D132" />
					</li>
					<li>
						<span>Study</span>
						<span className="float-right">79%</span>
						<Line percent="79" trailWidth="4" strokeWidth="4" strokeColor="#6573ED" />
					</li>
				</ul>
				<div id="chart" className="float-right w-55p btm-235">
					<ReactApexChart options={this.state.options} series={this.state.series} type="area" width={350} height={150} />
					<span className="display-in">
				<Circle percent="65" trailWidth="15" strokeWidth="15" strokeColor="#6573ED" />
				<span className="rate">$840.00</span>
				<Circle percent="66" trailWidth="15" strokeWidth="15" strokeColor="#A2EBD6" />
				<span className="rate">$460.00</span>
				</span>
				</div>
				</div>
			</div>
		);
	}
}
export default Overview;
