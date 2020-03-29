import React from 'react';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';
import Article from '../components/Article';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

class ArticleListView extends React.Component {
	state = {
		articles: null
	};

	componentDidMount() {
		const getData = async () => {
			try {
				return await axios.get(
					'https://lukezsmith.herokuapp.com/api-site/blogposts/blogposts/'
				);
			} catch (error) {
				this.setState({ articles: '404' });
			}
			return 0;
		};
		const evalData = async () => {
			const data = await getData();
			if (data !== undefined) {
				this.setState({ articles: data });
			} else {
				this.setState({ articles: '404' });
			}
		};

		evalData();
	}

	render() {
		const { articles } = this.state;
		if (articles === null) {
			return null;
		}

		articles.data.forEach((item, index) => {
			if (item.is_visible === false) {
				articles.data.splice(index, 1);
			}
		});

		let posts = <h1>Oops! No posts yet, please check again later.</h1>;

		if (
			articles.data !== undefined &&
			articles.data !== '404' &&
			articles.data.length !== 0 &&
			articles.data[0].is_visible !== false
		) {
			posts = (
				<ul id='article-list'>
					{articles.data.map(article => (
						<Article data={article} />
					))}
				</ul>
			);
		}
		return (
			<div className='articleView'>
				<div className='ui container left aligned'>
					<Grid.Column id='article-list-main-grid' width={11}>
						{posts}
						<Newsletter />
					</Grid.Column>
					<SocialBar />
				</div>
			</div>
		);
	}
}
export default ArticleListView;
