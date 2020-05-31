import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { Divider } from 'semantic-ui-react';

class Post extends React.Component {
  render() {
    const { data } = this.props;

    const date = moment(data.published_date).format('MMMM Do, YYYY');
    return (
      <div id='post-section'>
        <div>
          <a className='post-header' href={`/post/${data.slug}`}>
            {data.title}
          </a>
          <p
            style={{
              fontWeight: '500',
              color: '#999',
              paddingTop: '1%'
            }}
          >
            Posted on {date}
          </p>
          <div> {data.lead}</div>
          <br />
          <Divider />
        </div>
      </div>
    );
  }
}
Post.propTypes = {
  data: PropTypes.objectOf.isRequired
};
export default Post;
