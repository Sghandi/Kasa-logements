import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Location from "./components/Location/Location"
import NotFound from "./components/NotFound/NotFound"
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Location/:id" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
