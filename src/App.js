import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

class App extends Component {
	render() {
		return (
			<div className="App">
				<ul>
					<li>
						{" "}
						<NavLink to="/users">Users</NavLink>
					</li>
					<li>
						{" "}
						<NavLink
							to={{
								pathname: "/courses"
							}}
						>
							{" "}
							Courses
						</NavLink>
					</li>
				</ul>

				<Switch>
					<Route path="/users" component={Users} />
					<Route path="/courses" component={Courses} />
					<Redirect from="/all-courses" to="/courses" />
					<Route render={() => <div>404 | Page not found</div>} />
				</Switch>
			</div>
		);
	}
}

export default App;
