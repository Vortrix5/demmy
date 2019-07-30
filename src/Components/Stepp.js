import React from "react";
import CodeShow from "./CodeShow";
import SubTitle from "./Subtitle";
import { connect } from "react-redux"
import { Container, Button } from "@material-ui/core";




function Stepp(props) {
    function handleClickOpen(e) {
        props.dispatch({ type: "OPEN_MODAL", name: e })
    }
    return (
        <>


            <Container style={{ backgroundColor: "white", marginLeft: 45, paddingBottom: 30, paddingTop: 30, borderRadius: 15, boxShadow: "-6px 13px 22px -3px rgba(0,0,0,0.41)" }}>
                <SubTitle>{props.sub}</SubTitle>
                <p>{props.desc}</p>
                <CodeShow code={props.cod} height={props.heit1} width={props.wid1} />
                <p>{props.desc2}</p>
                <CodeShow code={props.cod2} height={props.heit2} width={props.wid2} />
                <p>{props.desc3}</p>
                <center>
                    {(props.butt) ?
                        <Button onClick={(e) => handleClickOpen(e.target.name)} 
                        name={props.but}
                         variant="outlined" color="primary">
                            {props.but}
                        </Button>
                        : ""}

                </center>

            </Container>

        </>
    )
}

const mapStateToProps = state => ({
    open: state.open,
    navbar: state.navbar
})

export default connect(mapStateToProps)(Stepp)