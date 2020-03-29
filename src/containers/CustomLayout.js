/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, List } from 'semantic-ui-react';

class CustomLayout extends React.Component {
	render() {
		const { children } = this.props;

		const homeEval = () => {
			if (
				!window.location.href.includes('/about') &&
				!window.location.href.includes('/projects') &&
				!window.location.href.includes('/bookshelf')
			) {
				return true;
			}
			return false;
		};
		return (
			<div className='main-section'>
				{/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
				<style>{`
      body > div,
      body > div > div,
      body > div > div > div.main-section {
        height: 100%;
      }
    `}</style>

				<Grid id='main-grid' columns={2}>
					<Grid.Column computer={3} tablet={2} mobile={0}>
						<NavLink className='a-blocker' to='/'>
							<h2 className='underline-header-text leftheader-col-text '>
								lukezsmith
							</h2>
						</NavLink>
					</Grid.Column>
					<Grid.Column id='center-col' computer={10} tablet={14} mobile={16}>
						<Grid.Row id='listrow' textAlign='center'>
							<List horizontal>
								<List.Item style={{ paddingTop: '5%' }}>
									<List.Content>
										<List.Header>
											<NavLink
												className='link-underline'
												isActive={homeEval}
												activeClassName='link-active'
												to='/'
											>
												Blog
											</NavLink>
										</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>
										<List.Header>
											<NavLink
												className='link-underline'
												activeClassName='link-active'
												to='/projects'
											>
												Projects
											</NavLink>
										</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>
										<List.Header>
											<NavLink
												className='link-underline'
												activeClassName='link-active'
												to='/about'
											>
												About
											</NavLink>
										</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>
										<List.Header>
											<NavLink
												className='link-underline'
												activeClassName='link-active'
												to='/bookshelf'
											>
												Bookshelf
											</NavLink>
										</List.Header>
									</List.Content>
								</List.Item>
							</List>
						</Grid.Row>
						<Grid.Row>
							<Grid id='article-list-grid' textAlign='center'>
								<Grid.Row>
									<Grid.Column
										computer={14}
										tablet={14}
										mobile={16}
										id='test-col'
										verticalAlign='middle'
										textAlign='center'
									>
										{children}
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Grid.Row>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}
CustomLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

export default CustomLayout;
