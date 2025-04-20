import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login';
import Browse from '../Components/Browse';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUsers, removeUser } from '../store/userSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, password, displayName} = user;
    dispatch(addUsers({uid: uid, email:email, password:password, displayName:displayName }))
    // ...
  } else {
    dispatch(removeUser());
    // User is signed out
    // ...
  }
});
  }, [])
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
