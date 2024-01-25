import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [vetor, setVetor] = useState([]);

  const getData = async () => {
    const data = await
    fetch('https://jsonplaceholder.typicode.com/users')
    const convert = await data.json();
    setVetor(convert)
  }
  useEffect(() =>{
    getData();
  })
  const dentista = vetor.find(vetor => vetor.id === parseInt(params.id))
  return (
    <>
      <h1>Detail Dentist {params.id}</h1>
      <p>{dentista?.name}</p>
      <p>{dentista?.email}</p>
      <p>{dentista?.phone}</p>
      <p>{dentista?.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail