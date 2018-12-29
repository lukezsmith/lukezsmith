import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

class Article extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    const date = moment(props.data.published_date).format('Do MMMM, YYYY');
    data.published_date = date;
  }

  render() {
    const { data } = this.props;
    return (
      <div className="home-info">
        <div className="ui container left aligned">
          <p>
            <a className="aTagStyleBlocker" href={`/blog/${data.slug}`}>
              <h2 className="underlineHeaderText">{data.title}</h2>
            </a>
            <p id="dateText">{data.published_date}</p>
            <p id="leadText">{data.lead}</p>
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}
Article.propTypes = {
  data: PropTypes.objectOf.isRequired,
};
export default Article;
