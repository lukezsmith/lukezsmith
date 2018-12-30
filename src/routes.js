import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleDetailView from './containers/ArticleDetailView';
import ArticleListView from './containers/ArticleListView';
import CreateArticleView from './containers/CreateArticleView';
import UpdateArticleView from './containers/UpdateArticleView';
import AboutView from './containers/AboutView';
import ProjectView from './containers/ProjectView';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ArticleListView}>
        {' '}
      </Route>
      <Route path="/about/" component={AboutView}>
        {' '}
      </Route>
      <Route path="/projects/" component={ProjectView}>
        {' '}
      </Route>
      <Route path="/:articleSlug/" component={ArticleDetailView}>
        {' '}
      </Route>
      <Route path="/new/" component={CreateArticleView}>
        {' '}
      </Route>
      <Route path="/update/" component={UpdateArticleView}>
        {' '}
      </Route>
    </Switch>
  </div>
);
export default BaseRouter;
