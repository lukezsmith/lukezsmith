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
  return <img id='withimage-article-img' src={image} alt='' />;
}

function WithoutImageArticleImage(props) {
  const { image } = props;
  return <img src={image} alt='' />;
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
          <h1 className='content-title'>{article.data.title}</h1>
          <p className='content-date'>{publishedDate}</p>
          <div className='listrow'>
            <div className='header-section'>
              <div
                style={{
                  color: 'rgb(153, 153, 153)',
                  fontStyle: 'italic',
                  marginBottom: '1%'
                }}
              >
                Test TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest Test Test TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest Test
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
            <div className='content-content'>
              {ReactHtmlParser(htmlContent)}
            </div>
            <Divider />
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
                Test TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest Test Test TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest TestTest TestTest TestTest TestTest
                TestTest TestTest TestTest Test
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div>{articleHtml}</div>;
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
