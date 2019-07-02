import React from 'react';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';
import Article from '../components/Article';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

class ArticleListView extends React.Component {
  state = {
    articles: null,
  };

  componentDidMount() {
    const getData = async () => {
      try {
        return await axios.get('https://lukezsmith.herokuapp.com/api-site/');
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

    // const invisibleArticles = articles.data.some(article => article.is_visible === false);
    // articles.data.splice(invisibleArticles);
    articles.data.forEach(function(item, index, object ) {
      if (item.is_visible === false){
        articles.data.splice(index, 1);  
      }       
    });
    // for (Object.keys() in articles){
    //   if (article.is_visible = false){
    //     var index = indexOf(article);
    //     articles.splice(index,1)
    //   }
    // }

    let posts = <h1>Oops! No posts yet, please check again later.</h1>;

    if (articles.data !== undefined && articles.data !== '404' && articles.data.length !== 0) {
      posts = (
        <ul id="articleList">
          {articles.data.map(article => (
            <Article data={article} />
          ))}
        </ul>
      );
    }
    return (
      <div className="articleView">
      <div className="ui container left aligned">
        <Grid.Column id="articleListMainGrid" width={11}>
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
