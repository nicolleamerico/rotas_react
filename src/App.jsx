import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sobre" element={<Sobre/>}></Route>
          <Route path="/contato" element={<Contato/>}></Route>
        </Routes>    
      </BrowserRouter>
    </div>
  )
}

export default App
