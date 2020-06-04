import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./Courses.css";

class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: "Angular - The Complete Guide" },
			{ id: 2, title: "Vue - The Complete Guide" },
			{ id: 3, title: "PWA - The Complete Guide" }
		]
	};

	handleCourseClick = id => {
		this.props.history.push("/courses/" + id);
	};

	render() {
		return (
			<div>
				<h1>Amazing Udemy Courses</h1>
				<section className="Courses">
					{this.state.courses.map(course => {
						return (
							<article
								className="Course"
								key={course.id}
								onClick={() => this.handleCourseClick(course.id)}
							>
								{course.title}
							</article>
						);
					})}
				</section>
			</div>
		);
	}
}

export default Courses;
