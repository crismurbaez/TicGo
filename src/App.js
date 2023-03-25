import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> --> cuando agregue redux*/}
      <Routes>
        <Route
          path={"/"}
          element={<NavBar />}
        >
          <Route
            path={"Home"}
            element={<Home />}
          />
          <Route
            path='*'
            element={
              <h1>404</h1>
            }
          />
        </Route>
      </Routes>
      {/* </Provider> */}
    </div >
  );
}

export default App;
