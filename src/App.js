import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CustomRoutes from "./routes/CustomRoutes";



function App() {
   
  return (
    <BrowserRouter>
    <CustomRoutes/>
    </BrowserRouter>
  );
}

export default App;
