import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './Shared/Footer';
import Navigation from './Shared/Navigation';
import Home from './Home/Home';
import Contact from './Pages/ContactMain/Contact/Contact';
import ContactMain from './Pages/ContactMain/ContactMain';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path='/home/:homeId'>
            <Home></Home>
          </Route>
          <Route path='/contact/'>
            <ContactMain></ContactMain>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
