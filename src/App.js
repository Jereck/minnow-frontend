import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_base.scss';

import NavBar from './components/navigation/navbar.component';

import Home from './pages/home';
import Blog from './pages/blog';
import BlogDetail from './pages/blog/blog-detail'
import About from './pages/about';
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
          

          <Route exact path="/blog/:id" key={document.location.href} component={BlogDetail} />
          
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
