import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.sampleFishes = this.sampleFishes.bind(this);
		//getInitialState
		this.state = {
			fishes: {},
			order: {}
};
}

addFish(fish) {
	// update our state
	// this.state.fishes.fish1 = fish (can do this but it is is more efficient to update state then add)
	const fishes = {...this.state.fishes};
	// add in our new fish
	const timestamp = Date.now();
	fishes[`fish-${timestamp}`] = fish;
	// set state
	this.setState({ fishes });
	//this.setState({ fishes: fishes }) returns the same.. the above is es6

}

loadSamples() {
	this.setState({
		fishes: sampleFishes
	})
}
			render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
						<ul className="list-of-fishes">
							{
								Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)
							}
						</ul>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>

			)
	}
}

export default App;