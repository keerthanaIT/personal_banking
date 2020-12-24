import React from 'react';
import { Line } from 'rc-progress';
import AreaChart from '../../chart/AreaChart';


class WeeklyStatistics extends React.Component {
	render() {
		return (
  <div>
    <h3 className="p-4-0-0-5p dark-gray-color fs-16">Weekly Statistics</h3>
				<div className="display-in">
					<ul>
						<li>
							<span className="font-b dark-gray-color fs-14">Taxi</span>
							<span className="float-right font-b dark-gray-color fs-14">68%</span>
							<Line percent="68" trailWidth="3" strokeWidth="3" strokeColor="#E44E42" />
							<i className="fas fa-car user_icon_clr statistics_car_icon" />
						</li>
						<li>
							<span className="font-b dark-gray-color fs-14">Games</span>
							<span className="float-right font-b dark-gray-color fs-14">44%</span>
							<Line percent="44" trailWidth="3" strokeWidth="3" strokeColor="#F7D132" />
							<i class="fas fa-gamepad user_icon_clr statistics_game_icon" />
						</li>
						<li>
							<span className="font-b dark-gray-color fs-14">Study</span>
							<span className="float-right font-b dark-gray-color fs-14">79%</span>
							<Line percent="79" trailWidth="3" strokeWidth="3" strokeColor="#6573ED" />
							<i class="fas fa-graduation-cap user_icon_clr statistics_study_icon" />
						</li>
					</ul>
				</div>

					<AreaChart />
  </div>
      );
	}
}
export default WeeklyStatistics;
