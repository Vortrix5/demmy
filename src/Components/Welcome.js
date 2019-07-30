import React from "react"
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom"


export default function Welcome(){
return(
    <>
    <center>
        <div style={{marginTop:100}}>
    <h1 style={{fontSize:150, }}>
        Welcome to DDSA
    </h1>
    <h5 style={{fontFamiy:"Roboto Slab, serif"}}>Please choose a track to start</h5>
    <br/>
    <Link to="/tracks"><Button variant="outlined" color="secondary">Choose a track</Button></Link>
    </div>
    </center>
    </>
)

}