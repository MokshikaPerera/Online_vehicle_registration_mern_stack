import axios from 'axios';
import React, { useEffect, useState , } from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

import { useParams ,Link } from "react-router-dom";
import DeleteModel from '../Components/modal/DeleteModel';
import UpdateModel from '../Components/modal/UpdateModel';


export default function VehicleDetails(props) {

  const [vehicle, setVehicle] = useState([]);
  
  const [vid, setVid] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [license_plate, setLicensePlate] = useState("");
  const [name, setName] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [license_type, setLicenseType] = useState("");

  // const [data, setData] = useState([]);
  

  // useEffect(async()=>{
  //     let result = await fetch("http://localhost:8000/api/vehicle/"+props.match.params.id)
  //     console.log(result)
  // },[])

  // Get ID from URL
const params = useParams();
    
const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:5000/api/vehicle/${params.vid}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

 return (
        <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80')",backgroundRepeat:"no-repeat"}}>
        <Header/>
        <div className="card text-center"  style={{width:"400px", marginLeft:"600px",marginTop:"40px",marginBottom:"100px",height:"600px", }}>
  
          <div className="card-body" style={{"marginTop":"40px"}}>
             <h1 className="card-title">Vehicle Details</h1>
             <br/>
             <div className="row-md-6 mb-4">
                    <label className="form-label" htmlFor="form3Example1n">License Plate</label>
                  <h2 className="card-title">{posts.name}</h2>
                  </div>
                  <br/>
                  <h3 className="card-text">{posts.vehicle_type}</h3>
                  <br/>
                  <h3 className="card-text">{posts.license_plate}</h3>
                  <br/>
                  <h3 className="card-text">{posts.contact_number}</h3>
                  <br/>
                  <h3 className="card-text">{posts.license_type}</h3>
                  <br/>
             <UpdateModel/>
             <DeleteModel/>
  </div>
  
</div>

<Footer/>
        </div>
    )
}