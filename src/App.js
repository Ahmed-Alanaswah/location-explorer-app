import React, { Component } from "react";
import Location from "./component/Location";
import SearchForm from "./component/SearchForm";
import axios from "axios";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city_name: "",
			type: "",
			lat: "",
			lon: "",
			map: "",
			showData: false,
		};
	}

	handleLocation = (e) => {
		let city_name = e.target.value;

		this.setState({
			city_name: city_name,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let config = {
			method: "GET",
			baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}`,
		};
		axios(config).then((res) => {
			let responseData = res.data[0];
			this.setState({
				city_name: responseData.display_name,
				lon: responseData.lon,
				lat: responseData.lat,
				map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=1-18`,
				showData: true,
			});
		});
	};
	render() {
		return (
			<div>
				<h1>welcome to city explorer</h1>
				<SearchForm
					handleLocation={this.handleLocation}
					handleSubmit={this.handleSubmit}
				/>
				{this.state.showData && (
					<Location
						city_name={this.state.city_name}
						lon={this.state.lon}
						lat={this.state.lat}
						map={this.state.map}
					/>
				)}
			</div>
		);
	}
}

export default App;
