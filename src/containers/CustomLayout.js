/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, List } from 'semantic-ui-react';

class CustomLayout extends React.Component {
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
