import './App.css';
import Home from "./pages/home/home";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import Trip from "./pages/trip/trip";
import Catalog from "./pages/catalog/trips";

function App() {
  return (

         <Router>
             <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/catalog" element={<Catalog/>}/>
                 <Route path="/trips/:id" element={<Trip/>}/>
             </Routes>

         </Router>


  );
}

export default App;
