import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import { Route, useHistory } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const history = useHistory()
  useEffect(()=>{
    history.push('/hero')
  },[history])

  return (
    <div className="App">
         <Route exact path='/hero' component={Hero} />
         <Route exact path='/' component={SearchBar} />
    </div>
    
  );
}

export default App;
