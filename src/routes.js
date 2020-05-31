import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostView from './containers/PostView';
import PostListView from './containers/PostListView';
import AboutView from './containers/AboutView';
import ProjectView from './containers/ProjectView';
import ContactView from './containers/ContactView';
import BookshelfView from './containers/BookshelfView';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path='/' component={PostListView}>
        {' '}
      </Route>
      <Route path='/about/' component={AboutView}>
        {' '}
      </Route>
      <Route path='/projects/' component={ProjectView}>
        {' '}
      </Route>
      <Route path='/bookshelf/' component={BookshelfView}>
        {' '}
      </Route>
      <Route path='/contact/' component={ContactView}>
        {' '}
      </Route>
      <Route path='/post/:articleSlug/' component={PostView}>
        {' '}
      </Route>
    </Switch>
  </div>
);
export default BaseRouter;
