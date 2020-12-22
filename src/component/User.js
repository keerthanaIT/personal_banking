import React from 'react';
import '../asserts/style/style.css';
import '../asserts/style/User.css';
import UserImg from '../asserts/img/user.png';

class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className=" col-lg-4">
		 <img className="p-4p" src={UserImg} alt="dashboard_icon"/>
			</div>
		);
	}
}
export default User;
