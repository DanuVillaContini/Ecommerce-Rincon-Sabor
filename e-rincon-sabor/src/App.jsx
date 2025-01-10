import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screen/HomeScreen'
import AuthRouter from './routes/AuthRouter'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/auth/*" element={<AuthRouter/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
