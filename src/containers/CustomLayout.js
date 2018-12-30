/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, List, Icon } from 'semantic-ui-react';
import { Events, animateScroll as scroll } from 'react-scroll';

class CustomLayout extends React.Component {
  constructor(props) {
    super(props);
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

  // eslint-disable-next-line class-methods-use-this
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    const { children } = this.props;

    const homeEval = () => {
      if (!window.location.href.includes('/about') && !window.location.href.includes('/projects')) {
        return true;
      }
      return false;
    };
    return (
      <div className="mainSection">
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.mainSection {
        height: 100%;
      }
    `}</style>

        <Grid id="mainGrid" columns={2}>
          <Grid.Column computer={3} tablet={2} mobile={0}>
            <NavLink className="aTagStyleBlocker" to="/">
              <h2 className="underlineHeaderText leftHeaderColText ">lukezsmith</h2>
            </NavLink>
          </Grid.Column>
          <Grid.Column id="centerCol" computer={10} tablet={14} mobile={16}>
            <Grid.Row id="listRow" textAlign="center">
              <List horizontal>
                <List.Item style={{ paddingTop: '5%' }}>
                  <List.Content>
                    <List.Header>
                      <NavLink
                        className="underlineLinkText"
                        isActive={homeEval}
                        activeClassName="activeLink"
                        to="/"
                      >
                        Blog
                      </NavLink>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>
                      <NavLink
                        className="underlineLinkText"
                        activeClassName="activeLink"
                        to="/projects"
                      >
                        Projects
                      </NavLink>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>
                      <NavLink
                        className="underlineLinkText"
                        activeClassName="activeLink"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Row>
            <Grid.Row>
              <Grid id="articleListGrid" textAlign="center">
                <Grid.Row>
                  <Grid.Column
                    computer={14}
                    tablet={14}
                    mobile={16}
                    id="testCol"
                    verticalAlign="middle"
                    textAlign="center"
                  >
                    {children}
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
                        <a
                          className="aTagStyleBlocker"
                          href="https://www.linkedin.com/in/luke-smith-a47931168/"
                        >
                          <Icon name="linkedin" size="big" />
                        </a>
                      </Grid.Column>
                      <Grid.Column id="toTopCol" width={6}>
                        <a
                          id="toTopButton"
                          className="underlineHeaderText"
                          onClick={this.scrollToTop}
                        >
                          Back to top
                        </a>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
CustomLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default CustomLayout;
