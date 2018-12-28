import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

function ShareButtons(props) {
  const { url, title } = props;
  return (
    <div>
      <h3>Like this post? Share it with friends!</h3>
      <Grid centered columns={6} verticalAlign="middle">
        <Grid.Column>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon />
          </TwitterShareButton>
        </Grid.Column>
        <Grid.Column>
          <FacebookShareButton url={url}>
            <FacebookIcon />
          </FacebookShareButton>
        </Grid.Column>
        <Grid.Column>
          <RedditShareButton url={url} title={title}>
            <RedditIcon />
          </RedditShareButton>
        </Grid.Column>
        <Grid.Column>
          <LinkedinShareButton url={url} title={title}>
            <LinkedinIcon />
          </LinkedinShareButton>
        </Grid.Column>
        <Grid.Column>
          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon />
          </WhatsappShareButton>
        </Grid.Column>
        <Grid.Column>
          <EmailShareButton url={url} subject={title}>
            <EmailIcon />
          </EmailShareButton>
        </Grid.Column>
      </Grid>
    </div>
  );
}
ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ShareButtons;
