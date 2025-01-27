import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screen/HomeScreen'
import AuthRouter from './routes/AuthRouter'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import CategoriasScreen from "./screen/CategoriasScreen";
import ComoComprar from "./screen/ComoComprar";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/auth/*" element={<AuthRouter/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/categorias" element={<CategoriasScreen/>} />
          <Route path="/como-comprar" element={<ComoComprar/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
