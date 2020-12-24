import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import CarousalItem from './CarousalItem';

class Carousal extends React.Component {
	render() {
		return (
			<Carousel enableAutoPlay autoPlaySpeed={5500} >
			<Item>
		<CarousalItem />
			</Item>
			<Item>
			<CarousalItem />
			</Item>
			<Item>
			<CarousalItem />
				</Item>
		</Carousel>
		);
	}
}
export default Carousal;
