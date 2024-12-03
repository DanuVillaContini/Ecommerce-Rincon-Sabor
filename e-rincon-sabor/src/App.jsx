import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screen/HomeScreen'
import AuthRouter from './routes/AuthRouter'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/auth/*" element={<AuthRouter/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
