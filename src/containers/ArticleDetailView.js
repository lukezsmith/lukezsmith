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
  return <img id="withImageArticleImage" src={image} className="ui large image" alt="" />;
}

function WithoutImageArticleImage(props) {
  const { image } = props;
  return <img src={image} className="ui large image" alt="" />;
}

function ArticleImage(props) {
  const { imageUrl } = props;
  if (imageUrl === '') {
    return <WithoutImageArticleImage image={imageUrl} />;
  }
  return <WithImageArticleImage image={imageUrl} />;
}

class ArticleDetailView extends React.Component {
  state = {
    article: null,
    publishedDate: null,
    htmlContent: '',
    isVisible: null,
  };

  componentDidMount() {
    const articleSlug = this.props.match.params.articleSlug;

    const getData = async () => {
      try {
        return await axios.get(`https://lukezsmith.herokuapp.com/api-site/${articleSlug}/`);
      } catch (error) {
        this.setState({ article: '404' });
      }
    };
    const evalData = async () => {
      const data = await getData();
      if (data !== undefined) {
        this.setState({ article: data });

        const date = moment(this.state.article.data.published_date).format('Do MMMM, YYYY');
        this.setState({
          publishedDate: date,
        });
        this.setState({
          htmlContent: this.state.article.data.content,
        });
        this.setState({
          isVisible: this.state.article.data.is_visible,
        });
      }
    };

    evalData();
  }

  render() {
    const { article, publishedDate, htmlContent, isVisible } = this.state;
    if (article === null) {
      return null;
    }

    let articleHtml = (
      <div>
        <NotFoundView />
      </div>
    );

    if (article.data !== undefined && isVisible !== false) {
      articleHtml = (
        <div id="articleDetailContent">
          <ArticleImage imageUrl={article.data.image} />
          <h1 className="contentTitle">{article.data.title}</h1>
          <p className="contentDate">{publishedDate}</p>
          <div className="articleContent">
            <p>{article.data.lead}</p>
            <div>{ReactHtmlParser(htmlContent)}</div>
            <Divider />
            <h2>Enjoyed this post? Have anything to add?</h2>
            <p>
              My articles are always a work in progress, so if you have any feedback or corrections,
              please let me know on my{' '}
              <a className="underlineHeaderText" href="https://twitter.com/lukezsmith">
                Twitter
              </a>
              .
              <br />
              <br />
              If you liked this post, please be sure to subscribe to my newsletter at the bottom of
              the page. Thanks!
            </p>
          </div>
          <Divider id="twitterPromptDiv" />
          <div id="socialEmbed">
            <ShareButtons
              url={`https://lukezsmith.herokuapp.com/${article.data.slug}/`}
              title={article.data.title}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="ui container left aligned">
        {articleHtml}
        <Newsletter />
        <SocialBar />
      </div>
    );
  }
}

WithImageArticleImage.propTypes = {
  image: PropTypes.string.isRequired,
};

WithoutImageArticleImage.propTypes = {
  image: PropTypes.string.isRequired,
};

ArticleImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ArticleDetailView;
