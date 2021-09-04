import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_base.scss';

import Home from './pages/home/home.component';
import NavBar from './components/navigation/navbar.component';
import Blog from './pages/blog/blog.component';
import About from './pages/about/about.component';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
