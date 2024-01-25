import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal, theme} from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const {theme, handleChageTheme} = useContext(ContextGlobal)
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="./Routes/Home">Home</Link>
      <Link to="./Routes/Detail">Detail</Link>
      <Link to="./Routes/Favs">Favs</Link>
      <Link to="./Routes/Contact">Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button
        onClick={handleChageTheme}
        style={{background: theme.background, color:theme.font}}
      >Change theme</button>
    </nav>
  )
}

export default Navbar