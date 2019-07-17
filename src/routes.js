import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleDetailView from './containers/ArticleDetailView';
import ArticleListView from './containers/ArticleListView';
import AboutView from './containers/AboutView';
import ProjectView from './containers/ProjectView';
import Bookshelf from './containers/Bookshelf';

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
      <Route path="/bookshelf/" component={Bookshelf}>
        {' '}
      </Route>
      <Route path="/:articleSlug/" component={ArticleDetailView}>
        {' '}
      </Route>
    </Switch>
  </div>
);
export default BaseRouter;
