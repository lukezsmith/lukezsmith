import React from 'react';
import { Divider } from 'semantic-ui-react';
import ArticleForm from '../components/ArticleForm';

function CreateArticleView() {
  return (
    <div>
      <h1>Submit New Article</h1>
      <Divider />
      <ArticleForm requestType="post" articleID={null} btnText="Submit" />
    </div>
  );
}
export default CreateArticleView;
