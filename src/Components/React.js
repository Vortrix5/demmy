import React from "react";
import CodeShow from "./CodeShow";
import SubTitle from "./Subtitle";
import {connect} from "react-redux"
import Title from "./Title";
import ContentEditable from "./ContentEditable";
import { Container } from "@material-ui/core";



function ReactP(props){

    return(
        <>
        <Container style={{backgroundColor:"white", marginLeft:45, paddingBottom:30, paddingTop:30, borderRadius:15,boxShadow: "-6px 13px 22px -3px rgba(0,0,0,0.41)"}}>
        <center>
        <Title><ContentEditable>Build your React Project</ContentEditable></Title>
        </center>
        <br/>
        <SubTitle>1. Create a React app</SubTitle>
        <p>Let's simply start by creating our React app using the "create-react-app" library which is the officially supported way to create single-page React applications just by typing this in your terminal:</p>
        <CodeShow code=" npm create-react-app app-name
            cd app-name
            npm start " height="80px" width="400px"/>
            </Container>
        </>
    )
}

const mapStateToProps= state => ({
    open: state.open,
    navbar: state.navbar
})

export default connect(mapStateToProps)(ReactP)