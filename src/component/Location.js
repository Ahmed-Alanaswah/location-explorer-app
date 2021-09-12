import React, { Component } from "react";

export class Location extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.city_name}</h1>
				<h2>{this.props.type}</h2>
				<h3>
					the latitude: {this.props.lat}/the longitude: {this.props.lon}
				</h3>
				<img src={this.props.map} alt="map" />
			</div>
		);
	}
}

export default Location;
