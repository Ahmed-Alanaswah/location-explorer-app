import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./formStyle.css";

export class SearchForm extends Component {
	render() {
		return (
			<Form onSubmit={this.props.handleSubmit}>
				<Form.Group className="mb-3" controlId="please enter the city name">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="text"
						placeholder="please enter the city name"
						onChange={(e) => this.props.handleLocation(e)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			// <div>
			// 	<form onSubmit={this.props.handleSubmit}>
			// 		<input
			// 			type="text"
			// 			placeholder="please enter the city name"
			// 			onChange={(e) => this.props.handleLocation(e)}
			// 		/>
			// 		<input type="submit" value="Search" />
			// 	</form>
			// </div>
		);
	}
}

export default SearchForm;
