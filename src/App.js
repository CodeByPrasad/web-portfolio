
import './App.css';
import Home from './components/home/home'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/footer/Footer'
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar />

        <Routes>
          {/* <Route path='/' element={<Navbar />} /> */}
          <Route path='/' element={<Home />}/>
          <Route path='About' element={<About />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>

  );
}

export default App;
