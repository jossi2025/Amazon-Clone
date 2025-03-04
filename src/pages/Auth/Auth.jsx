import React, { useState,useContext } from 'react'
import classes from './Signup.module.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import { ClipLoader } from "react-spinners";
import {DataContext} from "../../Components/DataProvider/DataProvider"
import { Type } from "../../Utility/action.type"





function Auth() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const [loading, setLoading] = useState({
      signIn:false,
      signUP:false,
    })
    
    const [{user}, dispatch] = useContext(DataContext)
    const navigate = useNavigate()

    const authHandler = async(e)=>{
      e.preventDeafault()
      console.log(e.target.name);
      if(e.target.name == "signin"){
        // firebase auth
        setLoading({...loading, signIn:true})
signInWithEmailAndPassword(auth, email, password)
.then((userInfo)=>{
  dispatch({
    type: Type.SET_USER,
    user: userInfo.user,
  });
  setLoading({...loading,signIn:false})
  navigate("/");
})
.catch((err)=>{
  setError(err.messege)
  setLoading({...loading,signUP:false})
})    
}else{
  setLoading({...loading,signUP:true})
createUserWithEmailAndPassword(auth, email, password)
.then((userInfo)=>{
  dispatch({
    type: Type.SET_USER,
    user: userInfo.user,
  });
  setLoading({...loading,signUP:false})
  navigate("/");
})
.catch((err) => {
  setError(err.message);
  setLoading({...loading,signUP:false})

})
      }
    };

 
    // console.log(password,email)
  return  <section className={classes.login}>
        {/* logo */}
        <Link to={"/"}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png" alt="" />
        </Link>

  {/* form */}

  <div className={classes.login__container}>
    <h1>sign-in</h1>
    <form action="">
  <div>
    <label htmlFor="email">Email</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
  </div>
  <div>
    <label htmlFor="password">password</label>
    <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" id="password" />
  </div>
  <button type="submit" 
  onClick={authHandler}
    name="signin" 
   className={classes.login__signInButton}>
   
   {loading.signIn ? (
      <ClipLoader color="#000" size={15}></ClipLoader>
    ): (
      "sign In"
    )}
  
  </button>
  </form>
  <p>
    By signing-in you agree to the AMAZON FAKE CLONE Condtions of use & Sale. Please see our Privacy Notice, our cookies Notice and our Intetest-Based Ads Notice.
  </p>


  <button type="submit" 
  name="signup"
  onClick={authHandler}  className={classes.login__registerButton}
  >
       {loading.signUP ? (
      <ClipLoader color="#000" size={15}></ClipLoader>
    ): (
      " Creat your Amazon Acount"
    )}
   
  </button>
{error && (
  <small style={{ paddingTop: "5px", color:"red" }}>{error}</small>
)}
  </div>
  </section>
  
}

export default Auth