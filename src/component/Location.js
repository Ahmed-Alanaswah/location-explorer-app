import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./formStyle.css";

export class Location extends Component {
	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<h1>{this.props.city_name}</h1>
				<h2>{this.props.type}</h2>
				<h3>
					the latitude: {this.props.lat}/the longitude: {this.props.lon}
				</h3>
				{/* <img src={this.props.map} alt="map" /> */}
				<Image src={this.props.map} fluid />
			</div>
		);
	}
}

export default Location;
