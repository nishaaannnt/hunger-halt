import { React,createContext,useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Routes, Route  } from "react-router-dom";
import { Login } from "./pages/Login";
import  Volunteer  from "./pages/Volunteer";
import AuthDetails from './service/AuthDetails'


// This is secondary important
const Appstate=createContext();

function App() {


  // Declare them here
  const [login,setLogin]=useState(false);
  const [userName,setuserName]=useState('');
  const [photo,setPhoto]=useState('');

  // App UI 
  // Change the values as per login
  return (
    <Appstate.Provider value={{userName,login,setuserName,setLogin,setPhoto,photo}}>
    
      <Header />
      <Routes>

        <Route
          exact path="/" element={<> <Home /></>}
        />
        <Route path="/volunteer" element={<Volunteer/>} />
        <Route path="/donation" element={<></>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <AuthDetails/>
      <Footer />
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
