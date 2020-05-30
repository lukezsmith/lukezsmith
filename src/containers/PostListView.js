import React from 'react';
import axios from 'axios';

import { Grid, Pagination } from 'semantic-ui-react';
import Post from '../components/Post';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

class PostListView extends React.Component {
  state = {
    dataLoaded: false,
    articles: null
  };

  async getData() {
    try {
      await axios
        .get('https://lukezsmith.herokuapp.com/api-site/blogposts/blogposts/')
        .then((res) => {
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

    let numPosts = 0;
    if (dataLoaded === false) {
      return null;
    } else {
      const filteredArticles = articles.data.filter(
        (article) => article.is_visible === true
      );
      if (
        articles.data !== undefined &&
        articles.data !== '404' &&
        filteredArticles.length !== 0
      ) {
        numPosts = filteredArticles.length;
        posts = (
          <ul style={{ paddingLeft: '0' }}>
            {filteredArticles.map((article) => (
              <Post data={article} />
            ))}
          </ul>
        );
      }
    }
    return (
      <div className='articleView'>
        {posts}
        <Pagination
          defaultActivePage={1}
          totalPages={Math.ceil(numPosts / 5)}
        />
      </div>
    );
  }
}
export default PostListView;
