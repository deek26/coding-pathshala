import React from 'react'
import { useState } from 'react'
import {MdOutlineCreateNewFolder,MdClose} from 'react-icons/md'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {db} from "../Firebase"
import { doc, serverTimestamp, setDoc,getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export default function Signup() {

  const navigate=useNavigate()
  const [showPassword,setShowPassword] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function OAuth(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider)
      const user=userCredentials.user
      console.log(user)
      navigate('/')

      const docSnap = await getDoc(doc(db, "users", user.uid));

      if(!docSnap.exists()){
        await setDoc(doc(db,"users",user.uid),{
          email:user.email,
          name:user.displayName,
          timestamp:serverTimestamp()
        })
      }

      
      toast.success("Logged in successfully")
    } catch (error) {
      toast.error("Something Went Wrong")
    }
    
  }

  async function onSubmit(e){
    e.preventDefault()
    try{
      const auth = getAuth();
      if(name===''){
        throw {code:'auth/no-name'}
      }
      const userCredential=await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential)
      const user = userCredential.user
      updateProfile(user,{
        displayName:name
      })

      const userDetails = {
        'name':name,
        'email':email,
        'timestamp':serverTimestamp()
      }

      await setDoc(doc(db,"users",user.uid),userDetails)
      toast.success("Registration Successful")
      navigate('/')
    }catch(error){
      console.log(error)
      const msg = displayErrors(error.code)
      toast.error(msg)
    }
  }

  function displayErrors(code){
    switch(code){
      case 'auth/email-already-in-use':
        return "This Email is Already Registered"

      case 'auth/invalid-email':
          return "Invalid Email Address"

      case 'auth/weak-password':
          return "Password should be atleast 6 characters long"

      case 'auth/no-name':
          return "Name is Required"

      default:
          return "Something Went Wrong!!"
        
    }
  }







  return (
    <div className='w-[40%] m-auto my-32'>
      <div className='flex items-center justify-between bg-black text-white font-bold p-3 text-2xl my-8'>
        <div className='flex items-center space-x-2'>
          <MdOutlineCreateNewFolder/>
          <h1>Create New Account</h1>
        </div>
          <MdClose/>
      </div>
      <form onSubmit={onsubmit}>
      <p className='text-lg'>First Name <span className='text-red-700'>*</span></p>
      <input type='text' className='border-gray-100 border-2 w-full my-2 py-3' 
                    onChange={(e)=>setName(e.target.value)}
      />

      <p className='text-lg'>Last Name <span className='text-red-700'>*</span></p>
      <input type='text' className='border-gray-100 border-2 w-full my-2 py-3' />

      <p className='text-lg'>Email <span className='text-red-700'>*</span></p>
      <input type='email' className='border-gray-100 border-2 w-full my-2 py-3' />

      <div className='flex space-x-3'>
        <p className='text-lg'>Sign Up for Newsletter</p>
        <input type='checkbox' />
      </div>
      
      <p className='text-lg'>Password<span className='text-red-700'>*</span></p>
      <input type='password' className='border-gray-100 border-2 w-full my-2 py-3'
       onChange={(e)=>setEmail(e.target.value)}
       />

      <p className='my-2 text-lg '>Please type the letters and numbers below <span className='text-red-700'>*</span></p>    
      <input type="text"  className='border-gray-100 border-2 w-full h-10 my-2'/>

      <div className=' flex w-full h-10 my-2 '>
        <div className='w-[50%]'>IMAGE</div>
          <button className='bg-[#e0ff56] w-[50%] font-semibold rounded' >RELOAD CAPTCHA</button> 
      </div>
        <p className='text-gray-500 my-2'> * Attention:Captcha is case sensitive.</p>
      

      <div className='flex space-x-6'>
        <button className='text-white bg-black py-2 rounded w-[50%] h-12 font-bold'
        onClick={OAuth}
        >Create An Account</button>
        <button className='bg-[#e0ff56] py-2 rounded w-20 font-semibold'>Back</button>
      </div>


      </form>
      
     

    </div>

  )
}
