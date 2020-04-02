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
		return 0;
	}
	// async evalData() {
	// 	const data = await this.getData();
	// 	Promise.all(data);
	// 	console.log(`data: ${data}`);

	// 	if (data !== undefined) {
	// 		// this.setState({
	// 		// 	articles: data
	// 		// }
	// 		// );
	// 		return data;
	// 	} else {
	// 		// this.setState({ articles: '404' });

	// 		return '404';
	// 	}
	// }

	async componentDidMount() {
		// console.log('mounting');
		await this.getData();
		this.setState({ dataLoaded: true });
		// Promise.all(([data]),then((res) => {
		// 	this.setState({ dataLoaded: true });
		// 	if (res !== undefined){
		// 		this.setState({ articles: data });

		// 	}else{
		// 		this.setState({ articles: '404' });

		// 	}

		// );

		// if (data !== undefined) {
		// 	this.setState({ articles: data });
		// } else {
		// 	this.setState({ articles: '404' });
		// }
	}

	render() {
		// console.log('rendering');
		const { dataLoaded, articles } = this.state;
		// console.log(dataLoaded);

		let posts = <h1>Oops! No posts yet, please check again later.</h1>;
		if (articles === null || dataLoaded == false) {
			// console.log('NULL');
			return null;
		} else {
			// console.log(articles);
			const filteredArticles = articles.data.filter(
				article => article.is_visible === true
			);
			// console.log(filteredArticles);
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
