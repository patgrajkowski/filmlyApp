import React from 'react';
import { Redirect, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Movies from './pages/Movies';
import MovieDetailedInfo from './components/MovieDetailedInfo/MovieDetailedInfo';
import AdminPanel from './components/Admin/AdminPanel';
function App() {
  return (
    <React.Fragment>
      <Layout>
        <Route path='/' exact>
          <Redirect to='/filmy' />
        </Route>
        <Route path='/filmy' exact>
          <Movies />
        </Route>
        <Route path='/filmy/:movieId'>
          <MovieDetailedInfo />
        </Route>
        <Route path='/logowanie'>
          <Login />
        </Route>
        <Route path='/rejestracja'>
          <Register />
        </Route>
        <Route path='/admin'>
          <AdminPanel />
        </Route>
      </Layout>
    </React.Fragment>
  );
}

export default App;
