import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';

class BaseLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id='main-section'>
        <Grid id='main-grid' stackable columns={2}>
          <Grid.Column id='sidebar-col' width={2}>
            <NavLink style={{ border: 'none' }} to='/'>
              <Button className='btn'>lukezsmith</Button>
            </NavLink>
            <ul id='navlinks'>
              <li>
                <NavLink to='/'>Posts</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About me</NavLink>
              </li>
              <li>
                <NavLink to='/projects'>Projects</NavLink>
              </li>
              <li>
                <NavLink to='/bookshelf'>Bookshelf</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
            <p id='categories-header'>Things that can be found on this site:</p>
            <ul className='categories'>
              <li>
                Programming-related content:{' '}
                <b>
                  <NavLink to='/tag/programming'>#programming</NavLink>
                </b>
              </li>

              <li>
                All things books:{' '}
                <b>
                  <NavLink to='/tag/books'>#books</NavLink>
                </b>
              </li>

              <li>
                Cool things I come across on the internet:{' '}
                <b>
                  <NavLink to='/tag/internet'>#internet</NavLink>
                </b>
              </li>

              <li>
                Random thoughts and ideas I have:{' '}
                <b>
                  <NavLink to='/tag/thoughts'>#thoughts</NavLink>
                </b>
              </li>

              <li>
                For occasional updates, here's my{' '}
                <b>
                  <a href='http://eepurl.com/gb_zzf'>newsletter</a>
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
