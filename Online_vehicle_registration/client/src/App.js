import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleRegister from "./pages/VehicleRegister";



function App() {
  
  return (
  <BrowserRouter>    
    <Routes>
      
    <Route path="/" element={<VehicleRegister />}/>
    <Route path="/vehicledetails" element={<VehicleDetails />}/>
    

    </Routes>
  </BrowserRouter>
  );
}

export default App;
