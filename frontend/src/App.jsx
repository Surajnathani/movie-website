import "./App.css"
 import {BrowserRouter,Route,Routes} from "react-router-dom"

import Home from "./page/Home";
import Profile from "./page/Profile";
import Admin from "./page/Admin";
import Login from "./page/Login";
import MovieForm from "./page/MovieForm";
import Registration from "./page/Registration";
import Navbar from "./component/Navbar";
import Movies from "./page/Movies";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/profile" element={<Profile/>} />
        {/* //Admin */}
        <Route path="/admin" element={<Admin/>} />
        {/* movie route */}
        <Route path="/admin/movies/add" element={<MovieForm/>} />
        <Route path="/admin/movies/edit/:id" element={<MovieForm/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
