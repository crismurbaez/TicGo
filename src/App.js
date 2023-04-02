import { React, useEffect } from 'react'
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import Aside from './Components/Aside/Aside';
import { useNavigate } from 'react-router-dom'

let i = 0;
function App() {

  const navigate = useNavigate();

  useEffect(() => {
    if (i === 0) {
      navigate('/home')
      i = i + 1
    }
  }, []);

  return (
    <div className="App flex flex-col md:flex-row lg:flex-row justify-evenly">
      {/* <Provider store={store}> --> cuando agregue redux*/}
      <NavBar />
      {/* tengo que colocar una página de inicio landingpage para que no quede vacío y mal maquetado
      nuca queda en la raiz siempre queda en una ruta
      */}
      <Routes>
        <Route
          path={"home"}
          element={<Home />}
        />
        <Route
          path='*'
          element={
            <h1>404</h1>
          }
        />
      </Routes>
      <Aside />
      {/* </Provider> */}
    </div >
  );
}

export default App;
