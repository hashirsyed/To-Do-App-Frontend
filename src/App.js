import "./App.css";
import {Routes,Route} from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Login from "./pages/SignUp"
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/404";
import SignUp from "./pages/SignUp";



function App() {
   
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/signUp" element={<Login/>}/>
    <Route path="/dashboard/signup" element={<SignUp/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
