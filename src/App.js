import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login'
import Signup from './Components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import ExampleCarousel from "./Components/Carousel";
function App() {
  return (

        <div className="App">
          <BrowserRouter>
              <AuthProvider>
                    <Header/>
                            <Routes>
                              <Route exact path='/' element={<Home/>}/>
                              <Route path="/login" element={<Login/>}/>
                              <Route path="/signup" element={<Signup/>}/>
                              <Route path="/caro" element={<ExampleCarousel/>}/>
                            </Routes>
                    <Footer/>
              </AuthProvider>
          </BrowserRouter>     
        </div>
  );
}

export default App;
