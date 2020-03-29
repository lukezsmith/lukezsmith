import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

class Article extends React.Component {
	constructor(props) {
		super(props);
		const { data } = this.props;
		const date = moment(props.data.published_date).format('Do MMMM, YYYY');
		data.published_date = date;
	}

	render() {
		const { data } = this.props;
		return (
			<div className='home-info'>
				<div className='ui container left aligned mobile-content-padding'>
					<p>
						<a className='a-blocker' href={`/${data.slug}`}>
							<h2 className='underline-header-text'>{data.title}</h2>
						</a>
						<p id='date-text'>{data.published_date}</p>
						<p id='lead-text'>{data.lead}</p>
						<br />
						<br />
					</p>
				</div>
			</div>
		);
	}
}
Article.propTypes = {
	data: PropTypes.objectOf.isRequired
};
export default Article;
