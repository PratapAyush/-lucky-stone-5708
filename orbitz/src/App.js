import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Route, { Routes } from "./Routes/Routes"


function App() {
  return (
    <div className="App">
      
    <Navbar/>
    <Routes/>
    
    </div>
  );
}

export default App;
