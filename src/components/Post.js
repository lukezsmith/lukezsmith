import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import moment from 'moment';
import { Divider } from 'semantic-ui-react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    const date = moment(props.data.published_date).format('Do MMMM, YYYY');
    data.published_date = date;
  }

  render() {
    const { data } = this.props;
    return (
      <div id='post-section'>
        <div>
          {/* <NavLink className='link-underline' to={`/${data.slug}`}>
            <h2 className='link-underline'>{data.title}</h2>
          </NavLink> */}
          <a
            href={`/${data.slug}`}
            className='link-underline'
            style={{ fontSize: '1.8em' }}
          >
            {data.title}
          </a>
          <p
            style={{
              fontWeight: '500',
              color: '#999',
              paddingTop: '1%'
            }}
          >
            Posted on {data.published_date}
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
