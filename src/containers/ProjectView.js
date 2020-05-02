import React from 'react';

import { Image } from 'semantic-ui-react';

import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

function ProjectView() {
	window.scrollTo(0, 0);
	return (
		<div
			id='project-content'
			className='mobile-content-padding ui container left aligned '
		>
			<h1>Projects</h1>
			<p id='lead-text'>
				The majority of my projects can be found on my{' '}
				<a
					className='underline-header-text'
					href='https://github.com/lukezsmith'
				>
					GitHub
				</a>
				.
				<br />
				<br />
				Currently working on some exciting projects which I'll post here soon.
				{/* Some of my favourite projects that I have worked on recently include the
				following: */}
				{/* <h3>Some of my recent projects:</h3>
				<ul>
					<li>
						<a href='https://d3homicides.herokuapp.com/'>
							Data visualisation of London homicide rates using D3.js
						</a>

						<Image
							className='project-img'
							src={
								'https://lukezsmithcom.s3.eu-west-2.amazonaws.com/projects/d3map.png'
							}
							size='large'
						/>
					</li>
					<li>
						<a href='https://github.com/lukezsmith/JourneyPlanner'>
							London journey planner Android application using TFL API
						</a>

						<Image
							className='project-img'
							src={
								'https://lukezsmithcom.s3.eu-west-2.amazonaws.com/projects/journeyplanner.png'
							}
							size='large'
						/>
					</li>
				</ul> */}
			</p>
			{/* <Segment raised className='projectSegments'>
				<Image
					id=''
					src={journeyPlannerLogo}
					className='ui small centered image'
					rounded
					alt=''
				/>
				<br />
				<a
					className='underline-header-text project-header-text'
					href='https://github.com/lukezsmith/JourneyPlanner'
				>
					JourneyPlanner
				</a>
				<br />
				<br />
				An Android London-based journey app that offers journey planning
				functionality as well as live bus-arrival data gathering using the TFL
				API.
				<br />
				<br />
				<Grid className='project-padding' columns={3}>
					<Grid.Column>
						<Image
							className='ui medium centered image project-padding project-padding-bottom'
							src={journeyPlannerView1}
							rounded
							alt=''
						/>
					</Grid.Column>
					<Grid.Column>
						<Image
							className='ui medium centered image project-padding project-padding-bottom'
							src={journeyPlannerView2}
							rounded
							alt=''
						/>
					</Grid.Column>
					<Grid.Column>
						<Image
							className='ui medium centered image project-padding project-padding-bottom'
							src={journeyPlannerView3}
							rounded
							alt=''
						/>
					</Grid.Column>
				</Grid>
				<br />
			</Segment>
			<Segment raised className='projectSegments'>
				<Image
					id=''
					src={cryptoXLogo}
					className='ui small centered image'
					rounded
					alt=''
				/>
				<br />
				<a
					className='underline-header-text project-header-text'
					href='https://github.com/lukezsmith/CryptoX'
				>
					CryptoX
				</a>
				<br />
				<br />
				A site dedicated to displaying the top Cryptocurrencies ranked by
				marketcap. The site shows statistics for each coin as well as a price
				graph. The search feature allows you to search for any coin with a
				marketcap inside the top fifty coins.
				<Image
					className='ui large centered image project-padding'
					src={cryptoXView2}
					rounded
					alt=''
				/>
				<br />
				<Image
					className='ui large centered image'
					src={cryptoXView1}
					rounded
					alt=''
				/>
				<br />
			</Segment>

			<Segment raised className='projectSegments'>
				<a
					className='underline-header-text project-header-text'
					href='https://github.com/lukezsmith/shubot'
				>
					ShuBot
				</a>
				<br />
				<br />
				An automated tool to purchase limited items faster by automation. The
				tool supports the following sites: SneakersNStuff.com, Offspring.com,
				SlamJamSocialism.com and Titolo.ch.
				<Embed
					className='project-padding'
					id='QFLiK1zl7VY'
					placeholder={shubotThumbnail}
					source='youtube'
				/>
				<br />
			</Segment> */}
			<Newsletter />
			<SocialBar />
		</div>
	);
}

export default ProjectView;
