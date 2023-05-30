import { React,createContext,useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Routes, Route  } from "react-router-dom";
import { Login } from "./pages/Login";
import UserRegister  from "./pages/user/UserRegister";
import NgoRegister  from "./pages/ngo/NgoRegister";
import  Volunteer  from "./pages/Volunteer";
import AuthDetails from './service/AuthDetails'
import Donate from "./pages/Donate";
import About from "./pages/About"
import SignUp from "./pages/SignUp";


// This is secondary important
const Appstate=createContext();

function App() {


  // We will get them in SignUp page
  const [userName,setuserName]=useState('Anonymous');
  const [email,setEmail]=useState('');
  const [photo,setPhoto]=useState('');
  const [login,setLogin]=useState(false);
  const [signupType,setsignupType]=useState();

  // Below we will get by registration for
  const [address,setAddress]=useState('');
  const [contact,setContactNo]=useState('');
  const [role,setRole]=useState('');

  // App UI 
  // Change the values as per login
  return (

    <Appstate.Provider value={{userName,login,email,photo,signupType,address,contact,role,setuserName,setLogin,setPhoto,setEmail,setAddress,setsignupType,photo}}>
    
      <Header />
      <Routes>

        <Route
          exact path="/" element={<> <Home /></>}
        />
        <Route path="/volunteer" element={<Volunteer/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/user/register" element={<UserRegister/>} />
        <Route path="/ngo/register" element={<NgoRegister/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <AuthDetails/>
      <Footer />
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
