import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';
import Homepage from './components/homepage';
import Header from './components/header';
import Footer from './components/footer';

const CreateMovie = lazy(() => import( './components/edit-movie') );
const ViewMovie = lazy(() => import( './components/view-movie') );

const App = () => (
  <Router>
    <Suspense fallback={
      <div className="wrapper"> 
      <Header/>
      <main>Loading...</main>
      <Footer/>
      </div>
    }>
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
        <Route path="/movie/:id" children={<ViewMovie />} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
