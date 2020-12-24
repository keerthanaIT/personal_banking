import React from 'react';
import '../../asserts/style/Sidebar.css';
import logoImg from '../../asserts/img/logo.png';
import DashboardIcon from '../../asserts/img/dashboard_icon.png';
import AccountsIcon from '../../asserts/img/account_icon.png';
import TransactionIcon from '../../asserts/img/transaction_icon.png';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Secure from '../Secure/Secure';
import Transaction from '../Transaction/Transaction';
import Accounts from '../Accounts/Accounts';
import Dashboard from '../Dashboard/Dashboard';
import Setting from '../Setting/Setting';



class SideBar extends React.Component {
	render() {
		return (
			<Router>
				<div className="row">
				<div className=" col-lg-2 w-100p position-r">
				<img className="p-0-5" src={logoImg} alt="logo" align="left" />
				<h3 className="mt-3p font-b dark-gray-color">DTS.</h3>
				<div className="sidebar-menu mt-25p fs-14">
					<img className="p-4-6p" src={DashboardIcon} alt="dashboard_icon" align="left" />
					<Link to="/"  className="active mt-3p">Dashboard</Link>
					<img className="p-4-6p" src={AccountsIcon} alt="AccountsIcon" align="left" />
					<Link to="/accounts">Accounts</Link>
					<img className="p-4-6p" src={TransactionIcon} alt="TransactionIcon" align="left" />
					<Link to="/transaction">Transactions</Link>
					<i class="fas fa-shield-alt float-left light-gray-color p-4-6p"></i>
					<Link to="/secure">Secure</Link>
					<i class="fas fa-cog float-left light-gray-color p-4-6p"></i>
					<Link to="/settings">Settings</Link>
					<span className="light-gray-color fs-14">
					<h3 className="mt-100p fs-14">Banking</h3>
					<h6 className="m-0">@2020 stag.</h6><h6 className="m-0">All rights reserved</h6>

					</span>
				</div>
         </div>
      
				<Switch>
             <Route exact path="/">
               <Dashboard />
             </Route>
             <Route path="/transaction">
               <Transaction />
             </Route>
             <Route path="/accounts">
               <Accounts />
             </Route>
						 <Route path="/secure">
               <Secure />
             </Route>
						 <Route path="/settings">
               <Setting />
             </Route>
           </Switch>
				</div>
			 </Router>
		);
	}
}
export default SideBar;
