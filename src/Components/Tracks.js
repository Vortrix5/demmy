import React from "react"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import img1 from "../web1.png"
import img2 from "../web2.png"
import img3 from "../web3.png"
import Imgs from "./img";





export default class Tracks extends React.Component{   
    state={
        tracks:[
         {title:"Web Level 1", desc:"Learn how to build a simple HTML/CSS page", red:"/html", img:img1},
         {title:"Web Level 2", desc:"Learn how to build a simple React page", red:"/react", img:img2},   
         {title:"Web Level 3", desc:"Learn how to work with MongoDb", red:"/mongo", img:img3}   

        ]
    }
    
    render(){
       const t = this.state.tracks.map(el=>
        <div style={{display:"inline-block", marginTop:80}}>
       <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" style={{width:"500px",height:"300px"}} src={el.img} waves />
          <MDBCardBody>
            <MDBCardTitle>{el.title}</MDBCardTitle>
            <MDBCardText>
              {el.desc}
            </MDBCardText>
            <MDBBtn href={el.red}>Start</MDBBtn>
          </MDBCardBody>
        </MDBCard>
    </MDBCol>
    </div>)
      return (
        <>
        <div style={{marginTop:"-60px"}}>
        <Imgs/>
        </div>
        <center>
        {t}
        </center>
        </>
        )
    }



}
