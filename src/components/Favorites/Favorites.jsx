import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../Card/Card";
import style from "./Favorite.module.css"
export default function Favorites(props) {
  const myFavorites = useSelector((state) => state.myFavorites);
  // console.log(myFavorites);
  return (
    <div>
      <div className={style.contenedor}>
        {myFavorites.map((personaje) => (
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
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
