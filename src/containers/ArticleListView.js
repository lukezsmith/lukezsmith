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

	async getData() {
		try {
			return await axios.get(
				'https://lukezsmith.herokuapp.com/api-site/blogposts/blogposts/'
			);
		} catch (error) {
			console.log(error.message);
			this.setState({ articles: '404' });
		}
		return 0;
	}
	async evalData() {
		const data = await this.getData();

		if (data !== undefined) {
			this.setState({
				articles: data
			});
		} else {
			this.setState({ articles: '404' });
		}
	}

	componentDidMount() {
		this.evalData();
	}

	render() {
		const { articles } = this.state;

		let posts = <h1>Oops! No posts yet, please check again later.</h1>;
		if (articles === null) {
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
				posts = (
					<ul id='article-list'>
						{filteredArticles.map(article => (
							<Article data={article} />
						))}
					</ul>
				);
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
