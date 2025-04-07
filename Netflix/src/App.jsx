import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login';
import Browse from '../Components/Browse';
function App() {
  return (
    <>
      <BrowserRouter>
           <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/browse" element={<Browse/>}/>
           </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
