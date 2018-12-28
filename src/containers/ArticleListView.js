import React from 'react';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';
import Article from '../components/Article';
import Newsletter from '../components/Newsletter';

class ArticleListView extends React.Component {
  articleData = {
    title: 'GitPython',
    date: 'October 15, 2018',
    lead: 'A quick tutorial to show how to get started with the powerful version control tool.',
  };

  state = {
    articles: null,
  };

  componentDidMount() {
    const getData = async () => {
      try {
        return await axios.get('http://127.0.0.1:8000/api/');
      } catch (error) {
        this.setState({ articles: '404' });
      }
      return 0;
    };
    const evalData = async () => {
      const data = await getData();
      if (data !== undefined && data.data.length !== 0) {
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

    let posts = <h1>Oops! No posts yet, please check again later.</h1>;

    if (articles.data !== undefined || articles.data !== '404') {
      posts = (
        <ul>
          {articles.data.map(article => (
            <Article data={article} />
          ))}
        </ul>
      );
    }
    return (
      <Grid.Column id="articleList" width={11}>
        {posts}
        <Newsletter />
      </Grid.Column>
    );
  }
}
export default ArticleListView;
