import React, { Component } from "react";

class Course extends Component {
	state = {
		id: null
	};

	componentDidMount() {
		console.log("Props received::", this.props);
		this.setState({
			id: this.props.match.params.id
		});
	}

	render() {
		return (
			<div>
				{this.state.id ? (
					<div>
						<h1>ID : {this.state.id}</h1>
						<p>You selected the Course with ID: {this.state.id}</p>
					</div>
				) : (
					<p>Loading</p>
				)}
			</div>
		);
	}
}

export default Course;
