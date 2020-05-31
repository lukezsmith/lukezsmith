import React from 'react';

function ContactView() {
  return (
    <div id='contact-section'>
      <h1>Contact</h1>

      <div>
        The best place to catch me is on Twitter at{' '}
        <b>
          <a href='https://twitter.com/lukezsmith'>@lukezsmith</a>
        </b>
      </div>
      <div>
        Alternatively, here is a list of my social accounts:
        <ul id='social-list'>
          <li>
            <b>
              <a href='https://github.com/lukezsmith/'>Github</a>
            </b>
          </li>
          <li>
            <b>
              <a href='https://www.linkedin.com/in/luke-smith-a47931168/'>
                LinkedIn
              </a>
            </b>
          </li>
          <li>
            <b>
              <a href='https://www.instagram.com/lukezachsmith/'>Instagram</a>
            </b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactView;
