/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Script from 'react-load-script';
import { Button, Form, Divider } from 'semantic-ui-react';

class Newsletter extends React.Component {
  render() {
    return (
      <div id="newsletterEmbed" className="ui container left aligned">
        <Divider />
        <Script
          url="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
        <script type="text/javascript">
          {' '}
          {`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);`}
        </script>
        <div>
          <h2 id="newsletterHeader">
            I create a monthly newsletter containing all the best and interesting content I have
            come across online and in books.
          </h2>
          <h2 id="subscribeHeader">Subscribe here:</h2>
        </div>
        <Form action="https://lukezsmith.us19.list-manage.com/subscribe/post" method="post">
          <input type="hidden" name="u" value="0ffa2cc92dbc571bc9a5c5ff6" />
          <input type="hidden" name="id" value="3ec4c01332" />
          <Form.Field>
            <label id="formField">Your name</label>
            <input type="text" name="MERGE1" id="MERGE1" />
          </Form.Field>
          <Form.Field>
            <label id="formField">Your email address</label>
            <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" />
          </Form.Field>
          <Button id="formButton" type="submit">
            Submit
          </Button>
          <input
            type="hidden"
            name="ht"
            value="09378f98755698d2c5a6bca78d4292258754b60d:MTU0NTQyNTEwMC4wMjAx"
          />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </Form>
      </div>
    );
  }
}
export default Newsletter;
