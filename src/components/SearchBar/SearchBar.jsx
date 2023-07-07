import { useState } from "react";
import Style from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (evento) => {
    setId(evento.target.value);
    //  console.log("funciona la funcion", evento.target.value);
  };
  return (
    <div className={Style.div}>
      <input
        className={Style.input}
        type="search"
        placeholder="ID..."
        onChange={handleChange}
        value={id}
      />
      <button
        className={Style.button}
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}

//input.addEventListener("on change", function(evento){})
