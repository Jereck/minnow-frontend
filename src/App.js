import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_base.scss';

import Home from './pages/home';
import NavBar from './components/navigation/navbar.component';
import Blog from './pages/blog';
import About from './pages/about';
import Login from './pages/login';
import { useSelector } from 'react-redux';
import SignUp from './pages/sign_in';


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/sign_up'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
