import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from "axios"
import { Route,Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from "./components/Detail/Detail"
import Home from './components/Home/Home';
import Form from './components/Form/Form';

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useLocation } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
function App() {

   function onSearch(dato){
      if (dato==="")return window.alert("NO estas poniendo nada Cabeza de Termo!!")
      if(characters.find(characters=>Number(dato)===characters.id))return window.alert("ya esta repetido TUKI")
      axios(`https://rickandmortyapi.com/api/character/${dato}`).then(
         (respuesta)=>{

            if (respuesta){
               setCharacters((oldChars)=>[...oldChars,respuesta.data]);
            }
         })
      .catch((err)=>window.alert("no hay personajes con ese id"));
   }
   function onClose(id){
      // console.log(id)
      let arrayFiltrado=characters.filter(pj=> pj.id !== id) //pasar id a numero
      setCharacters(arrayFiltrado);
      // console.log(arrayFiltrado)
   }
   // const Location=()=>{
   //    let curret =useLocation()
   //    return curret.pathname
   // }

   const [characters,setCharacters]= useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = "Holamundo1";

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {useLocation().pathname !== "/" && <Nav onSearch={onSearch}/>}
         

         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>} onClose={onClose}/>
         </Routes>
         


      </div>

   );
}

export default App;
