import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './Gmail Components/Main';
import Gmail from './Gmail Components/Gmail';
import KishanGmail from './KishanGmail';



function App() {
  return (
    <div className="App">
      {/* <Gmail/> */}
      <Main/>
      {/* <KishanGmail/> */}
     
    </div>
  );
}

export default App;
