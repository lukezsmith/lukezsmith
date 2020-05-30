import React from 'react';
import axios from 'axios';

import { Pagination } from 'semantic-ui-react';
import Post from '../components/Post';

class PostListView extends React.Component {
  state = {
    dataLoaded: false,
    articles: null,
    activePage: 1
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

  handlePageChange(activePage) {
    this.setState({ activePage });
  }

  async componentDidMount() {
    await this.getData();
    this.setState({ dataLoaded: true });
  }

  render() {
    console.log('render');
    const { dataLoaded, articles, activePage } = this.state;

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
            {filteredArticles
              .slice((activePage - 1) * 5, activePage * 5)
              .map((article) => (
                <Post data={article} />
              ))}
          </ul>
        );
        if (Math.ceil(numPosts / 5) === 1) {
          return <div>{posts}</div>;
        }
      }
    }
    return (
      <div>
        {posts}
        <Pagination
          defaultActivePage={1}
          totalPages={Math.ceil(numPosts / 5)}
          onPageChange={(event, data) => this.handlePageChange(data.activePage)}
        />
      </div>
    );
  }
}
export default PostListView;
