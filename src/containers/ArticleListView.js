import React from 'react';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';
import Article from '../components/Article';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

class ArticleListView extends React.Component {
	state = {
		dataLoaded: false,
		articles: null
	};

	async getData() {
		try {
			await axios
				.get('https://lukezsmith.herokuapp.com/api-site/blogposts/blogposts/')
				.then(res => {
					this.setState({ articles: res });
				});
		} catch (error) {
			console.log(`error: ${error.message}`);
			this.setState({ articles: '404' });
		}
	}

	async componentDidMount() {
		await this.getData();
		this.setState({ dataLoaded: true });
	}

	render() {
		const { dataLoaded, articles } = this.state;

		let posts = <h1>Oops! No posts yet, please check again later.</h1>;
		if (dataLoaded == false) {
			return null;
		} else {
			const filteredArticles = articles.data.filter(
				article => article.is_visible === true
			);
			if (
				articles.data !== undefined &&
				articles.data !== '404' &&
				filteredArticles.length !== 0
			) {
				console.log('true');
				posts = (
					<ul id='article-list'>
						{filteredArticles.map(article => (
							<Article data={article} />
						))}
					</ul>
				);
			} else {
				console.log('False');
			}
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
