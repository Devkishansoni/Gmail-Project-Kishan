import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './Gmail Components/Main';
import Gmail from './Gmail Components/Gmail';
import Googleapi from './ApiComponents/Googleapi';
import GmailAPI from './GmailAPI';


function App() {
  return (
    <div className="App">
      {/* <Gmail/> */}
      {/* <Main/> */}
      {/* <Googleapi/> */}
      <GmailAPI/>
     
    </div>
  );
}

export default App;
