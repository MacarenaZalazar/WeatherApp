import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import WeatherDetails from './components/Card/WeatherDetails';
import Favourites from './containers/CardsDisplay/Favourites';
import Home from './containers/Home/Home';
import { AppCont } from './styledApp';
import cloudsGif from './utils/clouds-loop_2.gif'

function App() {
  const {flag} = useSelector(state => state)
  return (
    <AppCont img={cloudsGif}>
          <Route exact path='/' component={Hero} />
          {flag &&<Route path='/' component={SearchBar} />}
          <Route exact path='/home' component={Home} />
          <Route path ='/details/:name' component={WeatherDetails}/>
          <Route exact path ='/favourites' component={Favourites}/>
    </AppCont>
  );
}

export default App;
