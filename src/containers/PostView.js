import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import { Divider } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

import Newsletter from '../components/Newsletter';
import ShareButtons from '../components/ShareButtons';
import NotFoundView from '../components/NotFoundView';
import SocialBar from '../components/SocialBar';

function WithImageArticleImage(props) {
  const { image } = props;
  return (
    <img
      id='withimage-article-img'
      src={image}
      className='ui large image'
      alt=''
    />
  );
}

function WithoutImageArticleImage(props) {
  const { image } = props;
  return <img src={image} className='ui large image' alt='' />;
}

function ArticleImage(props) {
  const { imageUrl } = props;
  if (imageUrl === '') {
    return <WithoutImageArticleImage image={imageUrl} />;
  }
  return <WithImageArticleImage image={imageUrl} />;
}

class PostView extends React.Component {
  state = {
    article: null,
    publishedDate: null,
    htmlContent: ''
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
          'Do MMMM, YYYY'
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
    const { article, publishedDate, htmlContent } = this.state;
    if (article === null) {
      return null;
    }

    let articleHtml = (
      <div>
        <NotFoundView />
      </div>
    );

    if (article.data !== undefined) {
      articleHtml = (
        <div id='article-detail-content'>
          <ArticleImage imageUrl={article.data.image} />
          <h1 className='content-title'>{article.data.title}</h1>
          <p className='content-date'>{publishedDate}</p>
          <div className='listrow'>
            <div className='content-content'>
              {ReactHtmlParser(htmlContent)}
            </div>
            <Divider />
            <h2>Enjoyed this post? Have anything to add?</h2>
            <p className='content-content'>
              My articles are always a work in progress, so if you have any
              feedback or corrections, please let me know on my{' '}
              <a
                className='underline-header-text'
                href='https://twitter.com/lukezsmith'
              >
                twitter
              </a>
              .
              <br />
              <br />
              If you liked this post, please be sure to subscribe to my
              newsletter at the bottom of the page. Thanks!
            </p>
            <h2 />
          </div>
          <Divider id='twitter-prompt-div' />
          <div id='social-embed'>
            <ShareButtons
              url={`https://lukezsmith.herokuapp.com/${article.data.slug}/`}
              title={article.data.title}
            />
          </div>
        </div>
      );
    }

    return (
      <div className='ui container left aligned'>
        {articleHtml}
        <Newsletter />
        <SocialBar />
      </div>
    );
  }
}

WithImageArticleImage.propTypes = {
  image: PropTypes.string.isRequired
};

WithoutImageArticleImage.propTypes = {
  image: PropTypes.string.isRequired
};

ArticleImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default PostView;
