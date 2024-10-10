import logo from './logo.svg';
import './App.css';
import Login from './components/Login.jsx';
import Mensaje from './components/Mensaje.jsx';
import {useState} from 'react';


function App() {

  const [messageCode, setMessageCode] = useState('');

  const handleLogin = (message)=>{
    setMessageCode(message);
  }
  return (
    <div className="App">
      <Login submitFunction={handleLogin}/>
      <Mensaje messageCode={messageCode}/>
    </div>
  );
}

export default App;
