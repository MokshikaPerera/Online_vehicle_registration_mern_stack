import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer';
import Header from '../Components/Header';




export default function VehicleDetails() {
 
  const [vid, setVid] = useState("");
  const [license_type, setLicenseType] = useState("");
  const [license_plate, setLicensePlate] = useState("");
  const [name, setName] = useState("");
  const [contact_number, setContactNumber] = useState("");
  
  const userData ={
    vid,
    license_type,
    license_plate,
    name,
    contact_number,
  }
  


  function submitForm(e){
    e.preventDefault();
    if(license_type.length === 0 || license_plate.length === 0 || name.length === 0 || contact_number.length === 0  ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else{
      console.log(userData);
      axios.post("http://localhost:5000/api/vehicle",userData)
      .then(function (response) {
        console.log(response);
        setLicenseType("");
        setLicensePlate("");
        setName("");
        setContactNumber("");
        swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
        window.location.replace("/vehicledetails");
      })
      // .catch(function (error) {
      //   console.log(error);
      //   alert("not added");
      // });
    }
    
  }

    return (
        <div >
        <Header/>
        {/* <div
            className="hpimage"
            style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/realistic-studio-lights-empty-background-design_1017-27233.jpg?w=2000')",height: "110vh"
            }}
            ></div> */}
        <div class="card text-center" className="hpimage"
            style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/realistic-studio-lights-empty-background-design_1017-27233.jpg?w=2000')",height: "110vh"
            }} >
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>


<Footer/>
        </div>
    )
}