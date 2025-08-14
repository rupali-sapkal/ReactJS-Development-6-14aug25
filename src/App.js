import logo from './logo.svg';
import './App.css';
import Acomp1 from './Components/Acomp1';
import { Bcomp2 } from './Components/Bcomp2';


function App() {
  return (
    <div className="App">
     <Acomp1 surname="Sapkal"/>
    <Bcomp2 surname="Patil"/>
    </div>
    
  );
  
}

export default App;
