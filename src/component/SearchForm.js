import React, { Component } from "react";
import "./formStyle.css";
export class SearchForm extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit}>
					<input
						type="text"
						placeholder="please enter the city name"
						onChange={(e) => this.props.handleLocation(e)}
					/>
					<input type="submit" value="Search" />
				</form>
			</div>
		);
	}
}

export default SearchForm;
