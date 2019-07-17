/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { Events, animateScroll as scroll } from 'react-scroll';

class SocialBar extends React.Component {
  constructor() {
    super();
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {});

    Events.scrollEvent.register('end', () => {});
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Grid id="socialGrid" columns={2}>
        <Grid.Column id="socialList" width={10}>
          <a className="aTagStyleBlocker" href="https://twitter.com/lukezsmith">
            <Icon name="twitter" size="big" />
          </a>
          <a className="aTagStyleBlocker" href="https://www.facebook.com/lukezs">
            <Icon name="facebook" size="big" />
          </a>
          <a className="aTagStyleBlocker" href="https://github.com/lukezsmith">
            <Icon name="github" size="big" />
          </a>
          <a className="aTagStyleBlocker" href="https://www.linkedin.com/in/luke-smith-a47931168/">
            <Icon name="linkedin" size="big" />
          </a>
        </Grid.Column>
        <Grid.Column id="toTopCol" width={6}>
          <a id="toTopButton" className="underlineHeaderText" onClick={this.scrollToTop}>
            Back to top
          </a>
        </Grid.Column>
      </Grid>
    );
  }
}
export default SocialBar;
