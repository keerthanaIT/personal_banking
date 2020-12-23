import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';

class Carousal extends React.Component {
	render() {
		return (
			<Carousel>
				{/* enableAutoPlay autoPlaySpeed={5500} */}
				<Item>
					<ul className="txt-start">
						<li>
							<p className="display-in">
								<i className="fas fa-plane user_icon_clr" />
								<h4>Flight</h4>
							</p>
							<p>Send 4 transfers to the card</p>
						</li>
						<li>
							<span className="display-in">
								<i className="fa fa-thumbs-up user_icon_clr" />
								<h4>Bro</h4>
								<p>Invite 10 friends</p>
							</span>
						</li>
						<li>
							<span className="display-in">
								<i className="fas fa-truck-pickup user_icon_clr" />
								<h4>Apprentice</h4>
								<p>Rent a car abroad</p>
							</span>
						</li>
					</ul>
				</Item>
				<Item>
					<ul className="txt-start">
						<li>
							<i className="fas fa-plane user_icon_clr" />
							<h4>Flight</h4>
							<p>Send 4 transfers to the card</p>
						</li>
						<li>
							<i className="fa fa-thumbs-up user_icon_clr" />
							<h4>Bro</h4>
							<p>Invite 10 friends</p>
						</li>
						<li>
							<i className="fas fa-truck-pickup user_icon_clr" />
							<h4>Apprentice</h4>
							<p>Rent a car abroad</p>
						</li>
					</ul>
				</Item>
				<Item>
					{' '}
					<ul className="txt-start">
						<li>
							<i className="fas fa-plane user_icon_clr" />
							<h4>Flight</h4>
							<p>Send 4 transfers to the card</p>
						</li>
						<li>
							<i className="fa fa-thumbs-up user_icon_clr" />
							<h4>Bro</h4>
							<p>Invite 10 friends</p>
						</li>
						<li>
							<i className="fas fa-truck-pickup user_icon_clr" />
							<h4>Apprentice</h4>
							<p>Rent a car abroad</p>
						</li>
					</ul>
				</Item>
			</Carousel>
		);
	}
}
export default Carousal;
