/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import BaseRouter from './routes';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import BaseLayout from './containers/BaseLayout';

ReactGA.initialize('UA-142802186-1');

class App extends Component {
	componentDidMount = () => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	};

	componentDidUpdate = () =>
		ReactGA.pageview(window.location.pathname + window.location.search);

	render() {
		return (
			<div className='App'>
				<Router>
					<BaseLayout>
						<BaseRouter />
					</BaseLayout>
				</Router>
			</div>
		);
	}
}

export default App;
