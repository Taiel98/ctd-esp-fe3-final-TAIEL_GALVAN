import React, {useState, useEffect} from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
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
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {vetor.map(obeto => (<Card name={obeto.name} username={obeto.username} id={obeto.id}/>))}
      </div>
    </main>
  )
}

export default Home