import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, List, Button } from 'semantic-ui-react';

class BaseLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id='main-section'>
        <Grid id='main-grid' stackable columns={2}>
          <Grid.Column id='sidebar-col' width={2}>
            <NavLink className='a-blocker' to='/'>
              <Button className='btn'>Luke Smith</Button>
            </NavLink>
            <ul id='navlinks'>
              <li>
                <NavLink className='link-underline' to='/'>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink className='link-underline' to='/about'>
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink className='link-underline' to='/projects'>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink className='link-underline' to='/bookshelf'>
                  Bookshelf
                </NavLink>
              </li>
              <li>
                <NavLink className='link-underline' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
            <p id='categories-header'>Things that can be found on this site:</p>
            <ul className='categories'>
              <li>
                Programming-related content:{' '}
                <b>
                  <NavLink className='link-underline' to='/tags/programming'>
                    #programming
                  </NavLink>
                </b>
              </li>

              <li>
                All things books:{' '}
                <b>
                  <NavLink className='link-underline' to='/tags/books'>
                    #books
                  </NavLink>
                </b>
              </li>

              <li>
                Cool things I come across on the internet:{' '}
                <b>
                  <NavLink className='link-underline' to='/tags/internet'>
                    #internet
                  </NavLink>
                </b>
              </li>

              <li>
                For occasional updates, here's my{' '}
                <b>
                  <NavLink className='link-underline' to='/newsletter'>
                    newsletter
                  </NavLink>
                </b>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column id='content-col' width={13}>
            {children}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

export default BaseLayout;
