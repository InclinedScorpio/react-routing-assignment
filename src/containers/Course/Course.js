import React, { Component } from "react";

class Course extends Component {
	state = {
		id: null,
		title: null
	};

	componentDidMount() {
		console.log("Props received::", this.props);
		const query = new URLSearchParams(this.props.location.search);
		for (let param of query.entries()) {
			this.setState({
				id: this.props.match.params.id,
				title: param[1]
			});
		}
		console.log("Did mount");
	}

	componentDidUpdate(nextProps, nextState) {
		console.log("sdfsf", this.state.id);
		console.log("next0000", this.props.match.params.id);

		if (
			this.state.id &&
			nextProps.match.params.id != this.props.match.params.id
		) {
			const query = new URLSearchParams(this.props.location.search);

			for (let param of query.entries()) {
				this.setState({
					id: this.props.match.params.id,
					title: param[1]
				});
			}
		}
	}

	render() {
		return (
			<div>
				{this.state.id ? (
					<div>
						<div>
							<h1>ID : {this.state.title}</h1>
							<p>You selected the Course with ID: {this.state.id}</p>
						</div>
					</div>
				) : (
					<p>Loading</p>
				)}
			</div>
		);
	}
}

export default Course;
