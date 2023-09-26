import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { Routes,Route } from 'react-router-dom';
import Recipes from './Components/Recipes';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Recipes' element={<Recipes/>}></Route>
      <Route path='/Details' element={<Details/>}></Route>

    </Routes>

    </div>
  );
}

export default App;
