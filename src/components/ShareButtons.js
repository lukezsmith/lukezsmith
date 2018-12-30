import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} from 'react-share';

import redditIcon from '../images/share-buttons/reddit.svg';
import twitterIcon from '../images/share-buttons/twitter.svg';
import facebookIcon from '../images/share-buttons/facebook.svg';
import emailIcon from '../images/share-buttons/email.svg';
import whatsappIcon from '../images/share-buttons/whatsapp.svg';
import linkedinIcon from '../images/share-buttons/linkedin.svg';

function ShareButtons(props) {
  const { url, title } = props;
  return (
    <div>
      <h3>Like this post? Share it with friends!</h3>
      <Grid centered columns={6} verticalAlign="middle">
        <Grid.Column>
          <TwitterShareButton url={url} title={title}>
            <Image src={twitterIcon} />
          </TwitterShareButton>
        </Grid.Column>
        <Grid.Column>
          <FacebookShareButton url={url}>
            <Image src={facebookIcon} />
          </FacebookShareButton>
        </Grid.Column>
        <Grid.Column>
          <RedditShareButton url={url} title={title}>
            <Image src={redditIcon} />
          </RedditShareButton>
        </Grid.Column>
        <Grid.Column>
          <LinkedinShareButton url={url} title={title}>
            <Image src={linkedinIcon} />
          </LinkedinShareButton>
        </Grid.Column>
        <Grid.Column>
          <WhatsappShareButton url={url} title={title}>
            <Image src={whatsappIcon} />
          </WhatsappShareButton>
        </Grid.Column>
        <Grid.Column>
          <EmailShareButton url={url} subject={title}>
            <Image src={emailIcon} />
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
