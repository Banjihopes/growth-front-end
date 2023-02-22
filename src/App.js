import Home from "./Pages/Home/home";
import Topbar from "./Components/topbar/Topbar";
import Single from "./Pages/Single/single";
import Write from "./Pages/Write/write";
import Settings from "./Pages/Settings/settings";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  useEffect(() => {
    // This fetch code will execute after the component mounts
    fetch(`${process.env.REACT_APP_API_URL}/api/`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  }, []);

  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route end path='/' element={<Home />} />
          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/write' element={user ? <Write /> : <Register />} />
          <Route path='/settings' element={user ? <Settings /> : <Register />} />
          <Route path='/post/:postid' element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
