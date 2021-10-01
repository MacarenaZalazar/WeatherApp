import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import WeatherDetails from './components/Card/WeatherDetails';
import Favourites from './containers/CardsDisplay/Favourites';
import Home from './containers/Home/Home';

function App() {
  const {flag} = useSelector(state => state)
  return (
    <div className="App">
        <Route exact path='/' component={Hero} />
        {flag &&<Route path='/' component={SearchBar} />}
        <Route exact path='/home' component={Home} />
        <Route path ='/details/:name' component={WeatherDetails}/>
        <Route exact path ='/favourites' component={Favourites}/>
    </div>
  );
}

export default App;
