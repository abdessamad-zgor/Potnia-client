import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/layouts/Home';
import Navbar from './components/Navbar';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
