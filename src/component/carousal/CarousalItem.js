import React from 'react';

class CarousalItem extends React.Component {
	render() {
		return (
			<div>
				<ul className="txt-start mt-12p pl-5p w-100p">
					<li>
						<p className="display-in">
							<i className="fas fa-plane user_icon_clr clr-violet box-shadow fs-18 position-r w-15p p-5p"  />
							<p className="font-b dark-gray-color fs-14">Flight</p>
						</p>
						<h6 className="light-gray-color m-0">Send 4 transfers to the card</h6>
					</li>
					<li>
						<span className="display-in">
							<i className="fa fa-thumbs-up user_icon_clr clr-violet box-shadow fs-18 position-r w-15p p-5p" />
							<p className="font-b dark-gray-color fs-14">Bro</p>
							<h6 className="light-gray-color m-0">Invite 10 friends</h6>
						</span>
					</li>
					<li>
						<span className="display-in">
							<i className="fas fa-truck-pickup user_icon_clr clr-violet box-shadow fs-18 position-r w-15p p-5p" />
							<p className="font-b dark-gray-color fs-14">Apprentice</p>
							<h6 className="light-gray-color m-0">Rent a car abroad</h6>
						</span>
					</li>
				</ul>
			</div>
		);
	}
}
export default CarousalItem;
