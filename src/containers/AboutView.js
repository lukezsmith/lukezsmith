/* eslint-disable prettier/prettier */
import React from 'react';

import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import me from '../images/lukezsmith.jpg';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

function AboutView() {
	return (
		<div className='ui container left aligned '>
			<Image
				id='about-img'
				rounded
				src={me}
				className='ui medium centered image'
				alt=''
			/>
			<h1>Hi there!</h1>
			<p id='lead-text'>
				I&apos;m Luke, a Computer Science student at the University of Durham.
				I&apos;m based in London/Durham, UK and I love to design and build
				software.
				<br />
				<br />
				I am experienced with Python, Java, C# and Javascript. I also have a lot
				of web, mobile and desktop development experience. I enjoy working on
				open source projects as well as my own ideas.
				<br />
				<br />
				My main interests lie in computer science with a preference for
				applications that solve actual, real life problems. Hence, I am always
				on the lookout for real problems and their corresponding solutions.
				<br />
				<br />
				The purpose of this site is to showcase the{' '}
				<NavLink className='underline-header-text' to='/projects'>
					projects
				</NavLink>{' '}
				I have been working on and also for me to document the things I learn
				throughout my studies and career. I will also be offering my thoughts on
				topics/concepts that intrigue me. Hopefully you will find some of my
				thoughts and experiences interesting and/or useful.
				<br />
				<br />
				If you would like to get in touch, please contact me on my{' '}
				<a
					className='underline-header-text'
					href='https://twitter.com/lukezsmith'
				>
					twitter
				</a>{' '}
				or any of my other social accounts that can be found at the bottom of
				the page.
				<br />
				<br />
			</p>
			<Newsletter />
			<SocialBar />
		</div>
	);
}

export default AboutView;
