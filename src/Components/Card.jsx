import React, { useState } from "react";
import { Link } from "react-router-dom";



const Card = ({ name, username, id }) => {
  const [favo, setFavo] = useState('');

  const addFav = ()=>{
    const fav  = {
      'name': name,
      'username': username,
      'id': id
    };
    setFavo = fav;
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const saveData = () => {
    localStorage.setItem('favorito', favo)
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
