import style from "./Card.module.css"
import { Link } from "react-router-dom";

import { addFav,removeFav } from "../../redux/actions";
import { connect ,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { reducer} from "../../redux/reducer"



function Card(props) {

   const myFavorites=useSelector((state)=>state.myFavorites)

   const [isFav,setIsFav]=useState(false);

   const handleFavorite=()=>{

      if (isFav){
         setIsFav(false)
         props.removeFav(props.id)

      }if(!isFav){
         setIsFav(true)
         props.addFav(props)
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   console.log(myFavorites)
   return (
      <div>
         
         <div className={style.contenedor}>
               {
               isFav ? (
                  <button onClick={handleFavorite} className={style.corazon}>❤️</button>
               ) : (
                  <button onClick={handleFavorite} className={style.corazon}>🤍</button>
               )
               }

            <div className={style.boton}>
               
               <button className={style.button} onClick={()=>{props.onClose(props.id)}}>X</button>
            
            </div>

            <div className={style.estilo}>
               <h2 className={style.name}>{props.name}</h2>

               <div className={style.div}>
                  <h2 className={style.status}>{props.status}</h2>
                  <h2 className={style.species}>{props.species}</h2>
                  <h2 className={style.gender}>{props.gender}</h2>
                  <h2 className={style.origin}>{props.origin}</h2>
               </div>
               <Link to={`/detail/${props.id}`}>
                  <img className={style.img} src={props.image} alt='foto de Personaje' />
               </Link>

            </div>

         </div>
         
      </div>
      );
}
const mapDispatchToProps=(dispatch)=>{
   return{
      addFav:(props)=>{dispatch(addFav(props))},
      removeFav:(id)=>{dispatch(removeFav(id))}
   }
}
const mapStateToProps=(state)=>{
   return{
      myFavorites:state.myFavorites,
   }
}
export default connect (
   mapStateToProps,
   mapDispatchToProps
   )(Card);