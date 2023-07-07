import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Detail.module.css"

const Detail = () => {
  const [personaje,setPersonaje]=useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setPersonaje(data);
        // console.log("esta es la data",data)
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    ).catch(err=>window.alert("Error!! Cabeza de ñoqui"))
    return (console.log("adios"))
  }, [id]);
 

  return (
    <div className={style.div}>
      <div className={style.contenedor}>
        <div className={style.contenido}>
        <h1 className={style.titulo}>Hi Welcome ༼ つ ◕_◕ ༽つ</h1>
          <h2>✨{personaje.name && personaje.name}</h2>
          <img src={personaje.image} alt={personaje.name}/>
          <h2>✨{personaje.status ? personaje.status : ":( no hay status"}</h2>
          <h3>✨{personaje.species}</h3>
          <h3>✨{personaje.gender}</h3>
          <section>
            {/* <span>✨{personaje.species}</span> */}
            {/* <span>✨{personaje.gender}</span> */}
            <span>✨{personaje.origin?.name}</span>
          </section>
        </div>
      </div>
      <div> <img src="https://iili.io/HiTDThb.md.png" className={style.foto} /></div>
      
    </div>
  );
};
const aux = null;
const nuevo = aux && aux

export default Detail;

// []montaje
// [id]actualización
