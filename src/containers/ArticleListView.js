import React from 'react';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';
import Article from '../components/Article';
import Newsletter from '../components/Newsletter';

class ArticleListView extends React.Component {
  state = {
    articles: null,
  };

  componentDidMount() {
    this.passLocationToParent();
    const getData = async () => {
      try {
        return await axios.get('https://lukezsmith.herokuapp.com/api/');
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

  passLocationToParent() {
    this.props.callbackFromParent(this.props.location.pathname);
  }

  render() {
    console.log(`blog props: ${JSON.stringify(this.props)}`);
    console.log(`blog params: ${JSON.stringify(this.props.match.params)}`);
    console.log(`blog url: ${JSON.stringify(this.props.location)}`);
    const { articles } = this.state;
    if (articles === null) {
      return null;
    }

    let posts = <h1>Oops! No posts yet, please check again later.</h1>;

    if (articles.data !== undefined && articles.data !== '404') {
      posts = (
        <ul id="articleList">
          {articles.data.map(article => (
            <Article data={article} />
          ))}
        </ul>
      );
    }
    return (
      <Grid.Column id="articleListMainGrid" width={11}>
        {posts}
        <Newsletter />
      </Grid.Column>
    );
  }
}
export default ArticleListView;
