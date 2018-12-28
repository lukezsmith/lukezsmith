/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Divider } from 'semantic-ui-react';
import ArticleForm from '../components/ArticleForm';

const CreateArticleView = props => (
  <div>
    <h1>Update Article </h1>
    <Divider />
    <ArticleForm requestType="put" articleID={props.match.params.articleID} btnText="Update" />
  </div>
);

export default CreateArticleView;
