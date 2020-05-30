/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, List, Button } from 'semantic-ui-react';

class BaseLayout extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div id='main-section'>
				<Grid id='main-grid' stackable columns={2}>
					<Grid.Column id='sidebar-col' width={2}>
						<NavLink className='a-blocker' to='/'>
							<Button className="btn">lukezsmith</Button>
							</NavLink>
						<ul id="navlinks">
							<li>
								<NavLink to='/posts'>Posts</NavLink>
							</li>
							<li>
								<NavLink to='/about'>About me</NavLink>
							</li>
							<li>
								<NavLink to='/contact'>Contact</NavLink>
							</li>
							<li>
								<NavLink to='/projects'>Projects</NavLink>
							</li>
							<li>
								<NavLink to='/bookshelf'>Bookshelf</NavLink>
							</li>
						</ul>
						<p id="categories-header">Things that can be found here:</p>
						<ul className="categories">
						<li>
							Programming-related content:  <b><NavLink to='/tags/programming'>#programming</NavLink></b>
							</li>

							<li>
							All things books: <b><NavLink to='/tags/books'>#books</NavLink></b>
							</li>

							<li>
							Cool things on the internet:  <b><NavLink to='/tags/internet'>#internet</NavLink></b>
							</li>

							<li>
							For occasional updates, here's my  <b><NavLink to='/newsletter'>newsletter</NavLink></b>
							</li>
						</ul>
					</Grid.Column>
					<Grid.Column id='content-col' width={13}>
						{children}
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}
BaseLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

export default BaseLayout;
