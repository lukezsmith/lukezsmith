import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostView from './containers/PostView';
import PostListView from './containers/PostListView';
import ProgrammingPostListView from './containers/ProgrammingPostListView';
import BooksPostListView from './containers/BooksPostListView';
import InternetPostListView from './containers/InternetPostListView';
import ThoughtsPostListView from './containers/ThoughtsPostListView';
import AboutView from './containers/AboutView';
import ProjectView from './containers/ProjectView';
import ContactView from './containers/ContactView';
import BookshelfView from './containers/BookshelfView';
import NotFoundView from './components/NotFoundView';

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
      <Route exact path='/tag/programming/' component={ProgrammingPostListView}>
        {' '}
      </Route>
      <Route exact path='/tag/books/' component={BooksPostListView}>
        {' '}
      </Route>
      <Route exact path='/tag/thoughts/' component={ThoughtsPostListView}>
        {' '}
      </Route>
      <Route exact path='/tag/internet' component={InternetPostListView}>
        {' '}
      </Route>
      <Route path='/*' component={NotFoundView}>
        {' '}
      </Route>
    </Switch>
  </div>
);
export default BaseRouter;
