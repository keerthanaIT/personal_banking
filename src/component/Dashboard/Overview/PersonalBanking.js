import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import PolarAreaChart from '../../chart/PolarAreaChart';
var callback = function(key){};

class PersonalBanking extends React.Component {
	render() {
		return (
      <div>
        		<div className="personal-bank-box">
					<button type="button" className="float-right bg-white fs-14 card-button dark-gray-color font-b box-shadow position-r w-15p br-5p">
						+ Card
					</button>
					<h3 className="dark-gray-color fs-16">Personal Banking</h3>
					<Tabs defaultActiveKey="1" onChange={callback}>
						<TabPane tab="Reports" key="1">
							<div className="debit_card">
								<span>
									<p className="fs-12 font-b pb-30p light-gray-color">Debit Card</p>
									<h2><i class="fas fa-dollar-sign"></i> 13801.23</h2>
									<h6 className="light-gray-color">3789 **** **** 3930</h6>
								</span>
								<div className="card_convert br-20p bg-white position-r db_card_txt_clr">
									<h5>
									<span className="p-0-10p">&lt;</span>
									<span>Convert</span>
										 
										<span className="debit-card-icon box-shadow">
											<i class="fas fa-exchange-alt" />
										</span>
									</h5>
								</div>
							</div>
							<PolarAreaChart />
						</TabPane>
						<TabPane tab="Activity" key="2" className="display-in">
						Activity
						</TabPane>
						<TabPane tab="Bills" key="3">
							third
						</TabPane>
					</Tabs>
				</div>
		
      </div>
		);
	}
}
export default PersonalBanking;
