import React, { Component } from "react";

class Course extends Component {
	state = {
		id: null,
		title: null
	};

	componentDidMount() {
		console.log("Props received::", this.props);
		this.setState({
			id: this.props.match.params.id,
			title: this.props.match.params.title
		});
	}

	render() {
		return (
			<div>
				{this.state.id ? (
					<div>
						<h1>ID : {this.state.title}</h1>
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
