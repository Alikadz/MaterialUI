import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



          {/* <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/form' element={<AddingForm />} />
          <Route path='/favorite' element={<Favorite />} /> */}