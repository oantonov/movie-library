import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';
import Homepage from './components/homepage';

const CreateMovie = lazy(() => import( './components/movie') );
const Child = lazy(() => import( './components/child') );

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          {<Redirect to="/movies" /> }
        </Route>
        <Route path="/movies">
          <Homepage />
        </Route>
        <Route path="/movie/create">
          <CreateMovie />
        </Route>
        <Route path="/movie/:id" children={<Child />} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
