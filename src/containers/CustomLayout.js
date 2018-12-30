/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, Divider, List } from 'semantic-ui-react';
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

  myCallback = childLocation => {
    console.log(`this is the location passed back to CustomLayout: ${childLocation}`);
  };

  render() {
    // const { children } = this.props;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        callbackFromParent: this.myCallback,
      })
    );

    const homeEval = () => {
      // console.log(`current pathname: ${this.props.location.pathname}`);
      // if (
      //   this.props.location.pathname !== '/about' &&
      //   this.props.location.pathname !== '/projects'
      // ) {
      //   console.log('condition met, returning true');
      //   return true;
      // }
      // console.log('condition not met, returning false');
      // return false;
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

        <Grid id="mainGrid" columns={3}>
          <Grid.Column computer={3} tablet={1} mobile={0}>
            <NavLink className="aTagStyleBlocker" to="/">
              <h2 className="underlineHeaderText leftHeaderColText ">lukezsmith</h2>
            </NavLink>
          </Grid.Column>
          <Grid.Column id="centerCol" computer={10} tablet={14} mobile={16}>
            <Grid.Row id="listRow" textAlign="center">
              <List horizontal>
                <List.Item>
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
                    verticalAlign="middle"
                    textAlign="center"
                  >
                    {children}

                    <Divider />
                    <Grid>
                      <div className="ten wide column">
                        <div className="ui container left aligned">
                          <a className="aTagStyleBlocker" href="https://twitter.com/lukezsmith">
                            <i className=" big twitter icon" />
                          </a>
                          <a className="aTagStyleBlocker" href="https://www.facebook.com/lukezs">
                            <i className="big facebook icon" />
                          </a>
                          <a className="aTagStyleBlocker" href="https://github.com/lukezsmith">
                            <i className="big github icon" />
                          </a>
                          <a
                            className="aTagStyleBlocker"
                            href="https://www.linkedin.com/in/luke-smith-a47931168/"
                          >
                            <i className="big linkedin icon" />
                          </a>
                        </div>
                      </div>
                      <div className="six wide column right aligned">
                        <a
                          id="toTopButton"
                          className="underlineHeaderText"
                          onClick={this.scrollToTop}
                        >
                          Back to top
                        </a>
                      </div>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column computer={3} tablet={1} mobile={0} only="large screen " />
        </Grid>
      </div>
    );
  }
}
CustomLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default CustomLayout;
