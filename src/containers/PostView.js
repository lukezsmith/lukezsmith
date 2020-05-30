import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import { Divider, Button, Icon } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
import { NavLink } from 'react-router-dom';

import NotFoundView from '../components/NotFoundView';

class PostView extends React.Component {
  state = {
    article: null,
    publishedDate: null,
    htmlContent: null,
    footer: null,
    header: null,
    tags: null
  };

  componentDidMount() {
    const articleSlug = this.props.match.params.articleSlug;

    const getData = async () => {
      try {
        return await axios.get(
          `https://lukezsmith.herokuapp.com/api-site/blogposts/blogposts/${articleSlug}/`
        );
      } catch (error) {
        this.setState({ article: '404' });
      }
    };
    const evalData = async () => {
      const data = await getData();
      if (data !== undefined) {
        this.setState({ article: data });

        const date = moment(this.state.article.data.published_date).format(
          'MMMM Do, YYYY'
        );
        this.setState({
          publishedDate: date
        });
        this.setState({
          htmlContent: this.state.article.data.content
        });
      }
    };

    evalData();
  }

  render() {
    const {
      article,
      publishedDate,
      htmlContent,
      header,
      footer,
      tags
    } = this.state;
    if (article === null) {
      return null;
    }

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
            {header}
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
        <div className='footer-section' style={{ marginTop: '1%' }}>
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
            {footer}
          </div>
        </div>
      );
    }

    let tagSection = null;

    if (tags) {
      tagSection = tags.map((tag) => (
        <span>
          <NavLink to={`/tag/${tag}`}>#{tag}</NavLink>
        </span>
      ));
    }

    if (article.data !== undefined) {
      articleHtml = (
        <div id='article-detail-content'>
          <h1 className='content-title'>{article.data.title}</h1>
          <p className='content-date'>{publishedDate}</p>
          <div className='listrow'>
            {headerSection}
            <div className='content-content'>
              {ReactHtmlParser(htmlContent)}
            </div>
            <Divider />
            {tagSection}
            {footerSection}
            <div style={{ marginTop: '2%', textAlign: 'center' }}>
              <Button className='btn'>
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
