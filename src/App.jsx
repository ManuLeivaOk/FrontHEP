import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./layout/Index";
import Shop from "./layout/Shop";
import LayoutArticulos from "./layout/LayoutArticulos";
import {useState, useEffect} from 'react'
import 'animate.css';

function App() {
  
  const [arrayArticulos, setArrayArticulos] = useState([])

  
  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url = 'http://localhost:1337/blogs'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setArrayArticulos(resultado)
        console.log(arrayArticulos)
      } catch (error) {
        console.log(error)
      }
    }
    consultarAPI()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index arrayArticulos={arrayArticulos}/>}></Route>
        <Route path="/tienda" element={<Shop />}></Route>
        <Route path="/blog" element={<LayoutArticulos arrayArticulos={arrayArticulos}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
