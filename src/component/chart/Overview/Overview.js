import React from 'react';
import '../../asserts/style/Overview.css';
import PersonalBanking from './PersonalBanking';
import WeeklyStatistics from './WeeklyStatistics';


class Overview extends React.Component {
	render() {
		return (
			<div className=" col-lg-6 w-100p position-r">
				<h2 className="m-0 p-4-0-0-5p dark-gray-color">
					Overview
					<span className="float-right display-in w-30p">
						<span className="light-gray-color fs-14 ">
							25 August, 2020
							<i class="fas fa-calendar-day icon-color calender-icon" />
						</span>
					</span>
				</h2>
        <PersonalBanking />
				<WeeklyStatistics />
			</div>
		);
	}
}
export default Overview;
