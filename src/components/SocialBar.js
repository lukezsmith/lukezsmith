/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { Events, animateScroll as scroll } from 'react-scroll';

class SocialBar extends React.Component {
	constructor() {
		super();
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', function() {});

		Events.scrollEvent.register('end', function() {});
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	scrollToTop() {
		scroll.scrollToTop();
	}

	render() {
		return (
			<Grid id='social-grid' columns={2}>
				<Grid.Column id='social-list' width={10}>
					<a className='a-blocker' href='https://twitter.com/lukezsmith'>
						<Icon className='blue-icon' name='twitter' size='big' />
					</a>
					<a className='a-blocker' href='https://github.com/lukezsmith'>
						<Icon className='blue-icon' name='github' size='big' />
					</a>
					<a
						className='a-blocker'
						href='https://www.linkedin.com/in/luke-smith-a47931168/'
					>
						<Icon className='blue-icon' name='linkedin' size='big' />
					</a>
					<a
						className='a-blocker'
						href='https://www.instagram.com/lukezachsmith/'
					>
						<Icon className='blue-icon' name='instagram' size='big' />
					</a>
					<a className='a-blocker' href='https://www.facebook.com/lukezs'>
						<Icon className='blue-icon' name='facebook' size='big' />
					</a>
				</Grid.Column>
				<Grid.Column id='toTopCol' width={6}>
					<a
						id='totop-btn'
						className='link-underline'
						href='#'
						onClick={this.scrollToTop}
					>
						Back to top
					</a>
				</Grid.Column>
			</Grid>
		);
	}
}
export default SocialBar;
