import React, { useState } from "react";

import style from "./Form.module.css"
import validate from "../Validation/Validation";


export default function Form({login}) {
  const [userData,setUserData]=useState({
    email:"",
    password:""
  });
  const [errors,setErrors]=useState({})
  
  const handleChange =(event)=>{
    setUserData({
      ...userData,
      //nombre del input || valor del input
      [event.target.name]:event.target.value
    })
    validate({
      ...userData,
      [event.target.name]:event.target.value 
    },
    errors,
    setErrors
    )
  };


  const handleSubmit=(event)=>{
    event.preventDefault();
    login(userData)
  }
  
  return (
    <div>
     
      <div className={style.img}>
    
        <img className={style.foto} src="https://iili.io/HiAlrN4.md.png"/>
      </div >

    

      
      <div className={style.div}>

        <div className={style.contenedor}>

          <form >
            <label className={style.texto} htmlFor="email">Email :</label>
            <input
               
                name="email"
                type="text"
                placeholder="email..."
                value={userData.email}
                onChange={handleChange}
            ></input>
           
            <hr/>

            <label className={style.texto} htmlFor="password">Password :</label>
            <input
             
                name="password"
                type="password"
                placeholder="password..."
                value={userData.password}
                onChange={handleChange}
            ></input>

            <hr/>
           

            <button onClick={handleSubmit}>Submit</button>

          </form>

        </div>

      </div>
      <div>
        {(errors.email || errors.password)&& <img className={style.nube} src="https://iili.io/HiAWQhG.md.png" />}
      </div>
      <div className={style.errores}>
        {errors.email && <li className={style.validacion}>{errors.email}</li>}
        {errors.password && <li className={style.validacion}>{errors.password}</li>}
       
      </div>
      
    </div>
  );
}
{/* <div className={style.errores}>
<p className={style.validacion}>{errors.email}</p>
<p className={style.validacion}>{errors.password}</p>
</div> */}