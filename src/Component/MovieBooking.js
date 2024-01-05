import React, { useState } from 'react'
import emailjs from "emailjs-com"
import "../Styles/MovieBooking.css"
function MovieBooking() {

 const [formData,setFormData]=useState({name:"", email:"", movie:"", tickets:1,time:""})

function handleChange(e){
const{name,value}=e.target;
// console.log(name,value)
setFormData((prevData)=>({...prevData,[name]:value}))
}

 async function handleSubmit(e){
e.preventDefault();
console.log(e.target);

const response=await emailjs.sendForm(
    "service_ou8halp","template_ycbploe",e.target,"r71sCtlVMsETHYSb0"
);
console.log("Email sent Successfully",response)

}
  return (
    <div className='movieBookingForm'>
        <h2>Movie Booking Form</h2>

        {/* form using form form tag is used */}

<form onSubmit={handleSubmit}>
<label>Name:</label>
<input type="text" name="name" value={formData.name} onChange={handleChange}/>

<label>Email:</label>
<input type="text" name="email" value={formData.email} onChange={handleChange}/>

<label>Movie:</label>
<input type="text" name="movie" value={formData.movie} onChange={handleChange}/>

{/* <label>Time:</label>
<input type="time" name="time" value="" onChange={handleChange}/> */}

<label>Tickets:</label>
<input type="number" name="tickets" value={formData.tickets} onChange={handleChange}/>

<button type='submit '>Book Ticket</button>
</form>
    </div>
  )
}

export default MovieBooking