import React from 'react';
import '../asserts/style/style.css';
import '../asserts/style/User.css';
import UserImg from '../asserts/img/user_img.png';
import { Line } from 'rc-progress';
import UserShoppingIcon from '../asserts/img/user_shopping_icon.png';
import UserCarIcon from '../asserts/img/user_car_icon.png';
import UserCardIcon from '../asserts/img/user_card_icon.png';
import Carousel from './carousal/Carousal';

class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="col-lg-4 txt-center p-7p">
				<img className="user_img" src={UserImg} alt="dashboard_icon" />
				<h4>John Gnabry</h4>
				<ul className="display-flex">
					<li className="w-40p m-5p">
						<img src={UserCardIcon} alt="dashboard_icon" />
						<Line percent="100" trailWidth="4" strokeWidth="4" strokeColor="#E44E42" />

						<p className="gt-lt-sybl"> &lt; &gt;</p>
					</li>

					<li className="w-40p m-5p">
						<img src={UserShoppingIcon} alt="dashboard_icon" />
						<Line percent="100" trailWidth="4" strokeWidth="4" strokeColor="#F7D132" />

						<p className="gt-lt-sybl"> &lt; &gt;</p>
					</li>
					<li className="w-40p m-5p">
						<img src={UserCarIcon} alt="dashboard_icon" />
						<Line percent="100" trailWidth="4" strokeWidth="4" strokeColor="#6573ED" />
					</li>
				</ul>
				<div className="" />
				{/* <ul className="txt-start">
			 <li>
			 <i class='fas fa-plane'></i>
				 <h4>Flight</h4>
				 <p>Send 4 transfers to the card</p>
			 </li>
			 <li>
				 <h4>Bro</h4>
				 <p>Invite 10 friends</p>
			 </li>
			 <li>
				 <h4>Apprentice</h4>
				 <p>Rent a car abroad</p>
			 </li>
		 </ul> */}
				<Carousel />
			</div>
		);
	}
}
export default User;
