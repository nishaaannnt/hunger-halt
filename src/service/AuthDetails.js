import React,{useContext,useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase/firebase'
import { Appstate } from '../App'
import { doc, getDoc } from 'firebase/firestore'
import { profile } from '../assets/images'

// Authenticate if user is signed in

const  AuthDetails = () => {
const useAppstate=useContext(Appstate);

    useEffect(() => {
      onAuthStateChanged(auth,(user)=>{
        if(user){
          userInfo();
        }else{
        useAppstate.setuserName('');
        useAppstate.setLogin(false);
        useAppstate.setPhoto('');
        }
      })
    }, [])
    
    

    const userInfo=async()=>{
      useAppstate.setLogin(true);

      const ref=doc(db,'users',auth.currentUser.email);
      await getDoc(ref).then((res)=>{
        // useAppstate.setPhone=res.data.phone
        const user = res.data()
        if(user){
        useAppstate.setAddress(user.address);
        useAppstate.setContactNo(user.phone);
        useAppstate.setRole(user.userType);
        
        // Condition for username
        if(user.userType==='NGO'){
          useAppstate.setcperson(user.contactPerson);
          useAppstate.setuserName(user.displayName);
        }else if(user.userType==='user' ||user.userType==='volunteer'){
          useAppstate.setuserName(user.fullName);
        }else{
          useAppstate.setuserName('Anonymous')
        }

        // Condition for photo
        if(auth.currentUser.photoURL){
          useAppstate.setPhoto(auth.currentUser.photoURL)
        }else{
          useAppstate.setPhoto(profile)
        }
              
        }else{
          console.log('From authDetails else  ')
        }
      useAppstate.setEmail(auth.currentUser.email)     
      }
      
      )
    }
    }

export default AuthDetails;