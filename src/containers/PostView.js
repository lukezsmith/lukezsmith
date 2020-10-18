import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { Divider, Button, Icon } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
import { NavLink } from 'react-router-dom';

import NotFoundView from '../components/NotFoundView';

const ReactMarkdownWithHtml = require('react-markdown/with-html')


class PostView extends React.Component {
  state = {
    article: null
  };

  componentDidMount() {
    const articleSlug = this.props.match.params.articleSlug;

    const getData = async () => {
      try {
        return await axios.get(
          `https://lukezsmith.herokuapp.com/api-site/blogposts/all/${articleSlug}/`
          // `http://127.0.0.1:8000/api-site/blogposts/all/${articleSlug}/`
        );
      } catch (error) {
        this.setState({ article: '404' });
      }
    };
    const evalData = async () => {
      const data = await getData();
      if (data !== undefined) {
        this.setState({ article: data });
      }
    };

    evalData();
  }

  handleTwitterBtnClick() {
    window.open('https://twitter.com/lukezsmith');
  }

  render() {
    const { article } = this.state;
    if (article === null) {
      return null;
    } else if (article === '404' || article.data.is_visible === false) {
      return <NotFoundView />;
    }

    const publishedDate = moment(article.data.published_date).format(
      'MMMM Do, YYYY'
    );

    const htmlContent = article.data.content;
    const title = article.data.title;
    const header = article.data.header;
    const footer = article.data.footer;
    const tags = article.data.tags;

    let articleHtml = (
      <div>
        <NotFoundView />
      </div>
    );

    let headerSection = null;
    let footerSection = null;

    if (header) {
      headerSection = (
        <div className='header-section'>
          <div
            style={{
              color: 'rgb(153, 153, 153)',
              fontStyle: 'italic',
              marginBottom: '1%'
            }}
          >
            {ReactHtmlParser(header)}
          </div>
          <div
            style={{
              color: 'rgb(153, 153, 153)',
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '1.2em'
            }}
          >
            ~ ~ ~
          </div>
        </div>
      );
    }

    if (footer) {
      footerSection = (
        <div className='footer-section'>
          <div
            style={{
              color: 'rgb(153, 153, 153)',
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '1.2em'
            }}
          >
            ~ ~ ~
          </div>

          <div
            style={{
              color: 'rgb(153, 153, 153)',
              fontStyle: 'italic',
              marginTop: '1%'
            }}
          >
            {ReactHtmlParser(footer)}
          </div>
        </div>
      );
    }

    let tagSection = null;
    if (tags) {
      tagSection = (
        <div className='tag-section'>
          {tags.map((tag) => (
            <span>
              <NavLink style={{ fontSize: '0.9em' }} to={`/tag/${tag}`}>
                #{tag}{' '}
              </NavLink>
            </span>
          ))}
        </div>
      );
    }

    if (article.data !== undefined) {
      articleHtml = (
        <div id='article-detail-content'>
          <h1 className='content-title'>{title}</h1>
          <p className='content-date'>{publishedDate}</p>
          <div className='listrow'>
            {headerSection}
            <div className='content-content'>
              {/* {ReactHtmlParser(htmlContent)} */}
              <ReactMarkdownWithHtml source={htmlContent}></ReactMarkdownWithHtml>
              
            </div>
            <Divider />
            {footerSection}
            {tagSection}

            <div className='twitter-btn'>
              <Button onClick={this.handleTwitterBtnClick} className='btn'>
                <span>
                  <Icon name='twitter'></Icon>
                </span>
                <span>Get in touch!</span>
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return <div>{articleHtml}</div>;
  }
}

export default PostView;
