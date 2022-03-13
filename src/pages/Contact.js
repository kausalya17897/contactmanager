import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Contact.css'
import { useParams,useHistory } from 'react-router-dom';
export default function Contact() {
    const history=useHistory()
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[type,setType]=useState("");
    const initial=[
         {name:"kausalya",email:"Kausalya@gmail.com",phone:"12345757",type:"personal"},
         {name:"kausalya",email:"Kausalya@gmail.com",phone:"12345757",type:"personal"}]
    const [contact,setContact]=useState(initial)
    const addcontact=()=>{
        console.log("addding");
        console.log(contact)
        const newcontact={
            name:name,email:email,phone:phone
        }
        setContact([...contact,newcontact])
    }
    
    const {id}=useParams();
   
    const btnstyle={width:'900px',height:"30px",marginTop:'20px',color:"white",backgroundColor:"blue"}
    const[show,setShow]=useState("true");
    const editstyle={display:show? "block":"none"};
  return (
    <div>
        <h3>Contact Manager</h3>
        <div className='col2'>
            {show?
        <div className='addcontactgrp'style={{editstyle}} >
            <h3>ADD CONTACT</h3>
            <div>
            <TextField  type="text"
            className='addcontactvalue'
            value={name}
            onChange={(a)=>setName(a.target.value)}
            fullWidth label="Name" id="fullWidth" />
             <TextField  type="email"
             className='addcontactvalue'
             value={email}
             onChange={(a)=>setEmail(a.target.value)}
            fullWidth label="Email" id="fullWidth" />
             <TextField  type="text"
             value={phone}
             onChange={(a)=>setPhone(a.target.value)}
             className='addcontactvalue'
            fullWidth label="Phone" id="fullWidth" />
                 <button className="btnstyle"
                 style={btnstyle} onClick={addcontact}>ADD CONTACT</button>
            </div>
            <div>
            <p>Contact Type</p>
            <input type="radio"
            value={type}
            onChange={(a)=>setType(a.target.value)} name="contacttype"/><label for="personal">Personal</label>
            <input type="radio"
              value={type}
              onChange={(a)=>setType(a.target.value)}  name="contacttype"/><label for="professional">Professional</label>
        </div>
        
        </div>:
        <EditContact contact={contact} setContact={setContact} id={id}/>}
        <div>
            {contact.map(({name,type,email,phone,deleteButton,editButton},index)=>(
                
                <Book key={index} 
                name={name}
                type={type}
                email={email}
                phone={phone}
                id={index}
                deleteButton={
                    <button onClick={()=>{
                        const deleteidx=index;
                        const remainingContact=contact.filter((a,index)=>index!==deleteidx)
                    
                    setContact(remainingContact)}}>Delete</button>
                } />
                
                
           
               

            ))}
 { 
                  /* editButton={
                    <button onClick={()=>{history.push("/Contact/edit/:id")
                        setShow(!show)
                        
 
                    }}>Edit</button>
                }*/
            }

        </div>
        </div>



    </div>
  )
}
export function EditContact({contact,setContact}){
    
    const btnstyle={width:'900px',marginTop:'20px'}
    const [name,setName]=useState(contact.name);
const[email,setEmail]=useState(contact.email);
const[phone,setPhone]=useState(contact.phone);
const[type,setType]=useState("");
const {id}=useParams();
const editcontact=()=>{
        
    console.log("editcontact...","id",id)
    console.log(contact)
    const updatecontact={
        name:name,email:email,phone:phone
    }
    const copyContact=[...contact];
    copyContact[id]=updatecontact;
    setContact(copyContact);
    ;
}
return(
<div className='addcontactgrp' >
            <h3>EDIT CONTACT</h3>
            <div>
            <TextField  type="text"
            className='addcontactvalue'
            value={name}
            onChange={(a)=>setName(a.target.value)}
            fullWidth label="Name" id="fullWidth" />
             <TextField  type="email"
             className='addcontactvalue'
             value={email}
             onChange={(a)=>setEmail(a.target.value)}
            fullWidth label="Email" id="fullWidth" />
             <TextField  type="text"
             value={phone}
             onChange={(a)=>setPhone(a.target.value)}
             className='addcontactvalue'
            fullWidth label="Phone" id="fullWidth" />
                 <Button variant="contained"
                 style={btnstyle} onClick={editcontact}>UPDATE CONTACT</Button>
            </div>
            <div>
            <p>Contact Type</p>
            <input type="radio"
            value={type}
            onChange={(a)=>setType(a.target.value)} name="contacttype"/><label for="personal">Personal</label>
            <input type="radio"
              value={type}
              onChange={(a)=>setType(a.target.value)}  name="contacttype"/><label for="professional">Professional</label>
       
              </div>
        </div>
)

}
function Book({name,email,phone,type,deleteButton,editButton}){
console.log("name",name,email)
    return(
        <div className='list'>
            <div className='dflex jcs'><h2><b>{name}</b></h2>
            <span>{type}</span></div>
            
            <h7>📤{email}</h7>
            <p>📞+91 {phone}</p>
            <p>{deleteButton}</p>
            <p>{editButton}</p>

        </div>
    )
}
