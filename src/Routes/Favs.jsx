import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [fave, setFave] = useState('')
  const getData = () =>{
    return localStorage.getItem('favorito')
  }

  useEffect(() => {
    setFave(getData())
  }, [])
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        <div className="card">
        <p>{fave.name}</p>
        <p>{fave.username}</p>
        <p>{fave.id}</p>
        <Link key={fave.id} to={`../Routes/Detail/${fave.id}`}>
          <button>Info</button>
        </Link>
        </div>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
