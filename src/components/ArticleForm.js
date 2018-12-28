import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';

import moment from 'moment';

import axios from 'axios';

class ArticleForm extends Component {
  handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const lead = event.target.elements.lead.value;
    // const tags = event.target.elements.tags.value;
    const content = event.target.elements.content.value;

    const today = moment().format('Do MMMM, YYYY');

    switch (requestType) {
      default:
        break;

      case 'post':
        return axios
          .post('http://lukezsmith.herokuapp.com/api/', {
            title,
            lead,
            content,
            date_published: today,
            edited_date: today,
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));
      case 'put':
        return axios
          .put(`http://lukezsmith.herokuapp.com/api/${articleID}/`, {
            title,
            lead,
            content,
            edited_date: today,
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));
    }
    return 0;
  };

  render() {
    const { requestType, articleID, btnText } = this.props;
    return (
      <div>
        <Form onSubmit={event => this.handleFormSubmit(event, requestType, articleID)}>
          <Form.Field control={Input} name="title" label="Title" placeholder="Title" />
          <Form.Field control={Input} name="lead" label="Lead" placeholder="Lead" />
          <Form.Field control={Input} name="tags" label="Tags" placeholder="Tags" />

          <Form.Field
            control={TextArea}
            name="content"
            label="Content"
            placeholder="Article content"
          />
          <Form.Field control={Button} htmlType="submit">
            {btnText}
          </Form.Field>
        </Form>
      </div>
    );
  }
}
ArticleForm.propTypes = {
  requestType: PropTypes.string.isRequired,
  articleID: PropTypes.number.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default ArticleForm;
