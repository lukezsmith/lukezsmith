/* eslint-disable prettier/prettier */
import React from 'react';

function ContactView() {
  return (
    <div id='contact-section'>
      <h1>Contact</h1>

      <div>
        The best place to catch me is on Twitter at{' '}
        <b>
          <a className='link-underline' href='https://twitter.com/lukezsmith'>
            @lukezsmith
          </a>
        </b>
      </div>
      <div>
        Alternatively, here is a list of my social accounts:
        <ul id='social-list'>
          <li>
            <b>
              <a
                className='link-underline'
                href='https://twitter.com/lukezsmith'
              >
                Github
              </a>
            </b>
          </li>
          <li>
            <b>
              <a
                className='link-underline'
                href='https://twitter.com/lukezsmith'
              >
                LinkedIn
              </a>
            </b>
          </li>
          <li>
            <b>
              <a
                className='link-underline'
                href='https://twitter.com/lukezsmith'
              >
                Instagram
              </a>
            </b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactView;
