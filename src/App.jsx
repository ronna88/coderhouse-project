
import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"

function App() {
  const greeting = "Lista de Produtos";

  return (
    <>
      <NavBar />    
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
