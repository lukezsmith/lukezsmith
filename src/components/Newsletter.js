/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Script from 'react-load-script';
import { Button, Form, Divider, Container } from 'semantic-ui-react';

class Newsletter extends React.Component {
	render() {
		return (
			<Container id='newsletter-embed'>
				<Divider />

				<div>
					<h2 id='subscribe-header'>Subscribe to my newsletter:</h2>
				</div>
				<Form
					action='https://lukezsmith.us19.list-manage.com/subscribe/post'
					method='post'
				>
					<input type='hidden' name='u' value='0ffa2cc92dbc571bc9a5c5ff6' />
					<input type='hidden' name='id' value='3ec4c01332' />
					<Form.Field>
						<label id='form-field'>Your name</label>
						<input type='text' name='MERGE1' id='MERGE1' />
					</Form.Field>
					<Form.Field>
						<label id='form-field'>Your email address</label>
						<input
							type='email'
							autoCapitalize='off'
							autoCorrect='off'
							name='MERGE0'
							id='MERGE0'
						/>
					</Form.Field>
					<Button id='form-btn' type='submit'>
						Submit
					</Button>
					{/* <input
						type='hidden'
						name='ht'
						value='09378f98755698d2c5a6bca78d4292258754b60d:MTU0NTQyNTEwMC4wMjAx'
					/> */}
					<input type='hidden' name='mc_signupsource' value='hosted' />
				</Form>
				<Divider id='social-divider' />
			</Container>
		);
	}
}
export default Newsletter;
