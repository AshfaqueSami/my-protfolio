import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Shared/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home></Home>
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
