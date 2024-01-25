import React from "react";
import { Link } from "react-router-dom";
import Detail from "../Routes/Detail";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <p>{name}</p>
        <p>{username}</p>
        <p>{id}</p>
        <Link key={id} to={`../Routes/Detail/${id}`}>
          <button>Info</button>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
