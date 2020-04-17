import React, { Fragment } from 'reactn';
import NavBar from './components/navbar';
import Routes from './components/routes';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <NavBar/>
      <Routes/>
    </Fragment>
  );
}
export default App;
