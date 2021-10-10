import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_base.scss';

import Home from './pages/home/home.page';
import NavBar from './components/navigation/navbar.component';
import Blog from './pages/blog/blog.page';
import About from './pages/about/about.page';
import Login from './pages/login';


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
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
