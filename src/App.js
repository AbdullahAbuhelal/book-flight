import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Flights from './Flights';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/search-flights/:departure/:destination/:date' element={<Flights></Flights>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
