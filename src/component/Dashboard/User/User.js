import React from 'react';
import '../../../asserts/style/User.css';
import UserImg from '../../../asserts/img/user_img.png';
import { Line } from 'rc-progress';
import Carousel from '../../carousal/Carousal';

class User extends React.Component {
	
	render() {
		return (
			<div className="col-lg-4 txt-center p-7p w-100p position-r">
				<img className="user_img" src={UserImg} alt="dashboard_icon" />
				<h4 className="dark-gray-color fs-14">John Gnabry</h4>
				<ul className="display-flex">
					<li className="w-40p m-0-5p">
						<i class="fas fa-money-bill light-gray-color" />
						<Line percent="100" trailWidth="4" strokeWidth="4" strokeColor="#E44E42" />

						<p className="gt-lt-sybl font-b"> &lt; &gt;</p>
					</li>

					<li className="w-40p m-0-5p">
						<i class="fas fa-shopping-bag light-gray-color" />
						<Line percent="100" trailWidth="4" strokeWidth="4" strokeColor="#F7D132" />

						<p className="gt-lt-sybl font-b"> &lt; &gt;</p>
					</li>
					<li className="w-40p m-0-5p">
						<i class="fas fa-car-side light-gray-color" />
						<Line percent="100" trailWidth="4" strokeWidth="4" strokeColor="#6573ED" />
					</li>
				</ul>
				<span className="display-flex ">
					<div className="debit_card small-debit-card p-0-5" />
					<p className="light-gray-color fs-14 m-0 font-b">
						Main Card <br />
						<span className="dark-gray-color fs-12 ac_no ">***3930</span>
					</p>

					<span class="float-right display-in w-30p ">
						<span class="light-gray-color fs-14 ">
							<i class="fas fa-long-arrow-alt-right icon-color calender-icon float-right p-10-15" />
						</span>
					</span>
				</span>
				<Carousel />
			</div>
		);
	}
}
export default User;
