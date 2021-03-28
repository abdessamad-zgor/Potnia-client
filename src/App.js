import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/layouts/Home';
import Services from './components/layouts/Services';
import Navbar from './components/Navbar';
import Login from './components/layouts/Login';
import Footer from './components/Footer';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/auth" component={Login}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
