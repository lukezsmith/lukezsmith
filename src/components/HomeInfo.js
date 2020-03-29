import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import logo from '../images/logo.png';

function HomeInfo() {
	return (
		<div className='home-info'>
			<div className='ui container left aligned mobile-content-padding'>
				<img src={logo} className='ui massive image' alt='' />
				<p>
					<br />
					My name is Luke Smith and this is where I live on the internet.
					<br />
					<br />I am a software developer based in London and I am currently
					studying Computer Science at Durham University. I use Python and
					regularly work on open source projects as well as my own ideas.
					<br />
					<br />I will primarily be using this site for my{' '}
					<a href='/'>writing</a> and to showcase projects I have worked on.
					<br />
					<br />
				</p>
			</div>
			<Divider />
			<div className='ui container left aligned mobile-content-padding'>
				<p>Some of my projects:</p>
				<div role='list' className='ui list'>
					<div role='listitem' className='item'>
						<a href='/'>Coming soon...</a>
					</div>
				</div>
			</div>
			<Divider />
			<Grid>
				<div className='ten wide column'>
					<div className='ui container left aligned'>
						<a href='https://twitter.com/lukezsmith'>
							<i className=' big twitter icon' />
						</a>
						<a href='https://www.facebook.com/lukezs'>
							<i className='big facebook icon' />
						</a>
						<a href='https://github.com/lukezsmith'>
							<i className='big github icon' />
						</a>
						<a href='https://www.linkedin.com/in/luke-smith-a47931168/'>
							<i className='big linkedin icon' />
						</a>
					</div>
				</div>
				<div className='six wide column right aligned'>
					<p>Blog</p>
				</div>
			</Grid>
		</div>
	);
}

export default HomeInfo;
