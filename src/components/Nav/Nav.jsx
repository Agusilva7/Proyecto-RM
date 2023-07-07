import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function nav({onSearch}){
    return (
        <div>
            <nav className={style.nav}>

                <SearchBar onSearch={onSearch}/>

                <div className={style.botones}>
                    <button className={style.button3}>
                        <Link to="/favorites">Favorites</Link>
                    </button>
                    <button className={style.button}>
                        <Link to="/about">About</Link> 
                    </button>
                    <button className={style.button1}>
                        <Link to="/home">Home</Link>
                    </button>
                    <button className={style.button2}>
                        <Link to="/">Forms</Link>
                    </button>

                </div>
            </nav>
            
        </div>
    )
}
