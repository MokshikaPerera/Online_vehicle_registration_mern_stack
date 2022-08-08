import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeleteModel from "./Components/modal/DeleteModel";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleRegister from "./pages/VehicleRegister";



function App() {
  
  return (
  <BrowserRouter>    
    <Routes>
      
    <Route path="/" element={<VehicleRegister />}/>
    <Route path="/vehicledetails/:vid" element={<VehicleDetails />}/>
    <Route path="/delete" element={<DeleteModel />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
