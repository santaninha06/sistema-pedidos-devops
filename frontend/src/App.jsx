import { useEffect,useState } from 'react'

function App() {

 const [pedidos,setPedidos] = useState([])

 useEffect(()=>{

  fetch(`${import.meta.env.VITE_API_URL}/api/pedidos`)
   .then(res=>res.json())
   .then(data=>setPedidos(data))

 },[])

 return(
  <>
   <h1>Sistema de Pedidos</h1>

   <ul>
    {pedidos.map((pedido)=>(
      <li key={pedido.id}>
       {pedido.descricao}
      </li>
    ))}
   </ul>
  </>
 )
}

export default App