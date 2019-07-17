import React from 'react';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';
import Book from '../components/Book';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

class Bookshelf extends React.Component {
  state = {
    articles: null,
  };

  componentDidMount() {
    console.log('loaded ');
    const getData = async () => {
      try {
        return await axios.get('https://lukezsmith.herokuapp.com/api-site/books/books/');
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
        <div id="bookshelfContent" className="ui container left aligned">
          <h1>Bookshelf</h1>
          <p id="aboutText">
            I enjoy keeping track of the books I've read and maybe some other people will be
            interested to see. Hence, below is a list of all the books I've read.
            <br />
            <br />
            For the sake of organisation, I've decided to highlight those I found outstanding with
            <span className="yellow_text"> yellow</span> and above average books in{' '}
            <span className="lightblue_text"> light blue</span>. The list is ordered
            chronologically, with recent reads at the top:
          </p>

          <ul id="articleList">
            {articles.data.map(article => (
              <Book data={article} />
            ))}
          </ul>
        </div>
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
export default Bookshelf;
