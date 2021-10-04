
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';

import NotFound from './components/NotFound/NotFound';
import ClientsReview from './components/Clients-Review/ClientsReview';
import Navlink from './components/Navlink/Navlink';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navlink></Navlink>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/clientsReview">
            <ClientsReview></ClientsReview>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
