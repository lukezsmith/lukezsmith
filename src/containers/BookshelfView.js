import React from 'react';
import axios from 'axios';

import { Loader } from 'semantic-ui-react';
import Book from '../components/Book';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

class BookshelfView extends React.Component {
  state = {
    articles: null
  };

  componentDidMount() {
    const getData = async () => {
      try {
        return await axios.get(
          // 'https://lukezsmith.herokuapp.com/api-site/books/books/'
          'http://127.0.0.1:8000/api-site/books/books/'
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
      return (
        <div>
          <Loader>Loading</Loader>
        </div>
      );
    }

    articles.data.forEach((item, index) => {
      if (item.is_visible === false) {
        articles.data.splice(index, 1);
      }
    });

    let posts = (
      <div id='project-section'>
        <h1>Bookshelf</h1>
        <p id='lead-text'>
          I love books and find it interesting to know what kinds of books
          people are reading, so I thought i'd publish my own list.
          <br />
          <br />
          For the sake of organisation, I've decided to highlight those I found
          outstanding with
          <span style={{ color: 'green' }}> green</span> and above average books
          in{' '}
          <span className='lightblue_text' style={{ fontWeight: 'bold' }}>
            {' '}
            blue
          </span>
          . The list is ordered chronologically, with recent reads at the top:
        </p>
        <p>Oops! No books have been added yet, please check again later.</p>;
      </div>
    );

    if (
      articles.data !== undefined &&
      articles.data !== '404' &&
      articles.data.length !== 0 &&
      articles.data[0].is_visible !== false
    ) {
      posts = (
        <div id='bookshelf-content'>
          <h1>Bookshelf</h1>
          <p id='lead-text'>
            I love books and find it interesting to know what kinds of books
            people are reading, so I thought i'd publish my own list.
            <br />
            <br />
            For the sake of organisation, I've decided to highlight those I
            found above average in
            <span style={{ fontWeight: 'bold' }}> bold</span> and outstanding
            books in{' '}
            <span style={{ color: '#385e94', fontWeight: 'bold' }}> blue</span>.
            <br />
            <br />
            The list is ordered chronologically, with recent reads at the top.
          </p>

          <ul id='book-list'>
            {articles.data.map((article) => (
              <Book data={article} />
            ))}
          </ul>
        </div>
      );
    }
    return <div>{posts}</div>;
  }
}
export default BookshelfView;
