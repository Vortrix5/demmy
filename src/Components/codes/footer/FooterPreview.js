import React from "react";
import {connect} from "react-redux"
import { MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";

const FooterPreview = (props) => {
  const impo= props.footer.bgColor+" !important"
  return (
    <MDBFooter color={impo} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title" style={{color:props.footer.textColor}}>{props.footer.title}</h5>
            <p style={{color:props.footer.textColor}}>
              {props.footer.desc}
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

const mapStateToProps=(state)=>({
  footer: state.footerEdit
})

export default connect(mapStateToProps)(FooterPreview)