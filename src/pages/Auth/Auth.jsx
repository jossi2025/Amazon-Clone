import React, { useState } from 'react'
import classes from './Signup.module.css'
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase"



function Auth() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");

  return  <section className={classes.login}>
        {/* logo */}
        <Link>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png" alt="" />
        </Link>

  {/* form */}

  <div className={classes.login__container}>
    <h1>sign-in</h1>
    <form action="">
  <div>
    <label htmlFor="email">Email</label>
    <input value={email}onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
  </div>
  <div>
    <label htmlFor="password">password</label>
    <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" id="password" />
  </div>
  <button className={classes.login__signInButton}>
    sign In
  </button>
  </form>
  <p>
    By signing-in you agree to the AMAZON FAKE CLONE Condtions of use & Sale. Please see our Privacy Notice, our cookies Notice and our Intetest-Based Ads Notice.
  </p>


  <button className={classes.login__registerButton}>Creat your Amazon Acount</button>
  </div>
  </section>
  
}

export default Auth