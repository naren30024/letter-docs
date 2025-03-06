import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard';
import Auth from './component/Login';
import { BrowserRouter,Routes,Router,Route } from 'react-router-dom';

function App() {
  return (
    <>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/Letter' element={<Dashboard/>}/>
         </Routes>
       </BrowserRouter>
      
    </>
  );
}

export default App;
