import React from 'react';
import logoImg from '../asserts/img/logo.png';
import DashboardIcon from '../asserts/img/dashboard_icon.png';
import AccountsIcon from '../asserts/img/account_icon.png';
import SecureIcon from '../asserts/img/secure_icon.png';
import TransactionIcon from '../asserts/img/transaction_icon.png';
import SettingIcon from '../asserts/img/setting_icon.png';

class SideBar extends React.Component { 
	render() {
		return (
			<div className=" col-lg-2">
        <img className="logo" src={logoImg} alt="logo"  align="left" />
				<h3 className="mt-3p font-b">DTS.</h3>

				<div className="sidebar-menu mt-25p">
        <img className="p-4p" src={DashboardIcon} alt="dashboard_icon"  align="left" />
					<a href="/" className="active mt-3p">
						Dashboard
					</a>
          <img className="p-4p" src={AccountsIcon} alt="AccountsIcon"  align="left" />
					<a href="/" >Accounts</a>
          <img className="p-4p" src={TransactionIcon} alt="TransactionIcon"  align="left" />
					<a href="/" >Transactions</a>
          <img className="p-4p" src={SecureIcon} alt="SecureIcon"  align="left" />
					<a href="/" >Secure</a>
          <img className="p-4p" src={SettingIcon} alt="SecureIcon"  align="left" />
					<a href="/" >Settings</a>
					{/* <h3>Banking</h3>
					<p>@2020 stag.</p><p>All rights reserved</p> */}
				</div>
			</div>
		);
	}
}
export default SideBar;
