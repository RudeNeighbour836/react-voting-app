import React, { Component } from "react";
import { useState } from 'react';
import Card from "./CardUI";

import img1 from './images/m/2.jpg'

function Voting(){
    const [data, setData] =useState('');
    const [submitted, setSubmitted] =useState(false);
  
    const serverHost = 'http://localhost:4000';
    async function addvote(vote){
      const url = serverHost + '/results';
      const options = {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(vote)
      }
      const response = await fetch(url, options);
      if (response.status == 200){
        setSubmitted(true);
      }
    }
  
    const handleChange = (e) =>{
        const name = e.target.name;
        const value= e.target.value;
  
        const currentInputFieldData = {
          [name]:value      
        }
  
        const updateData = {
          ...data,
          ...currentInputFieldData
        }
        setData(updateData);
      }
        const handleSubmit = (e) => {
        addvote(data);
        e.preventDefault();
        }



        return (
            
            <div id ="main" className=" bg-info container-fluid d-flex justify-content-center">
                {!submitted ?
                <form onSubmit = {handleSubmit} method="post" required >
                <div className="row text-white ">
                    <div className="col-md-4">
                        <h2>Charirperson</h2>
                        <input type="radio" id="candidate" name ='Charirperson' value ='William' onChange={handleChange}/>
                        <label for="William">William</label><br></br>
                        
                        <input type="radio" id="candidate" name ='Charirperson' value ='Jack' onChange={handleChange}/>
                        <label for="Jack">Jack</label><br></br>
                        <input type="radio" id="candidate" name ='Charirperson' value ='Loulou' onChange={handleChange}/>
                        <label for="Loulou">Loulou</label><br></br>
                       <Card /> 
                    </div>
                    <div className="col-md-4">
                        <h2>Vice President</h2>
                        <input type="radio" id="candidate" name ='Vice-President' value ='Jane' onChange={handleChange}/>
                        <label for="Jane">Jane</label><br></br>
                        <input type="radio" id="candidate" name ='Vice-President' value ='Martha' onChange={handleChange}/>
                        <label for="Martha">Martha</label><br></br>
                        <input type="radio" id="candidate" name ='Vice-President' value ='Maria' onChange={handleChange}/>
                        <label for="Maria">Maria</label><br></br>
                    <Card />  
                    </div>
                    <div className="col-md-4">
                        <h2>Secretary General</h2>
                        <input type="radio" id="candidate" name ='Secretary-General' value ='Brenda' onChange={handleChange}/>
                        <label for="Brenda">Brenda</label><br></br>
                        <input type="radio" id="candidate" name ='Secretary-General' value ='Caesar' onChange={handleChange}/>
                        <label for="Caesar">Caesar</label><br></br>
                        <input type="radio" id="candidate" name ='Secretary-General' value ='Peter' onChange={handleChange}/>
                        <label for="Peter">Peter</label><br></br>
                    <Card /> 
                    </div>
                    <div className="col-md-4">
                        <h2>Deputy Secretary General</h2>
                        <input type="radio" id="candidate" name ='Deputy-Secretary-General' value ='Noah' onChange={handleChange}/>
                        <label for="Noah">Noah</label><br></br>
                        <input type="radio" id="candidate" name ='Deputy-Secretary-General' value ='Oliver' onChange={handleChange}/>
                        <label for="Oliver">Oliver</label><br></br>
                        <input type="radio" id="candidate" name ='Deputy-Secretary-General' value ='Jean' onChange={handleChange}/>
                        <label for="Jean">Jean</label><br></br>
                    <Card /> 
                    </div>
                    <div className="col-md-4">
                        <h2>Council Treasurer</h2>
                        <input type="radio" id="candidate" name ='Council-Treasurer' value ='Liamson' onChange={handleChange}/>
                        <label for="Liamson">Liamson</label><br></br>
                        <input type="radio" id="candidate" name ='Council-Treasurer' value ='Joshua' onChange={handleChange}/>
                        <label for="Joshua">Joshua</label><br></br>
                        <input type="radio" id="candidate" name ='Council-Treasurer' value ='Tchalla' onChange={handleChange}/>
                        <label for="Tchalla">Tchalla</label>
                    <Card /> 
                    </div>
                    <div className="col-md-4">
                        <h2>Council Spokesperson</h2>
                        <input type="radio" id="candidate" name ='Council-Spokesperson' value ='Alice' onChange={handleChange}/>
                        <label for="Alice">Alice</label><br></br>
                        <input type="radio" id="candidate" name ='Council-Spokesperson' value ='Nzisa' onChange={handleChange}/>
                        <label for="Nzisa">Nzisa</label><br></br>
                        <input type="radio" id="candidate" name ='Council-Spokesperson' value ='Peter' onChange={handleChange}/>
                        <label for="Peter">Peter</label><br></br>
                    <Card />  
                    </div>
                   
                </div>
                <center>
                <input type='submit' value= 'submit'/>
                </center>
                
                </form>
                
               :
                <p>Your Vote has been casted!

                    <h1>Click the button to view results</h1>
                    <button><a href="http://localhost:4000/results">Results</a> </button>
                </p>
                }
                
            </div> 
        );
}

export default Voting;