import Card from '../Card/Card'
import style from "./Cards.module.css"
import Titulo from '../Titulo/Titulo'

export default function Cards(props) {
   return ( 
   <div>
      <div><Titulo /></div>
      <div className={style.contenedor}>
            
         {props.characters.map((personaje)=>{
            return(
               <div>
                  <Card 
                  key={personaje.id}
                  name={personaje.name} 
                  status={personaje.status}
                  species={personaje.species}
                  gender={personaje.gender}
                  origin={personaje.origin.name}
                  image={personaje.image}
                  onClose={props.onClose}
                  id={personaje.id}
                  />
               </div>
            )        
            })
         }
      </div>
   </div>)
}
      

