import CodeShow from "../../CodeShow";
import React from "react"
import {connect} from "react-redux"
function FooterCode(props){
 const footerItems= 
`const FooterPreview = (props) => {
  return (
    <MDBFooter color="${props.footer.bgColor+" !important"}" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title" style={{color:${props.footer.textColor}}>${props.footer.title}</h5>
            <p style={${props.footer.textColor}}>
            ${props.footer.desc}
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

export default FooterPage;`
return(
   <CodeShow height="1200px" width="600px" code={footerItems}/>
)}

const mapStateToProps=state=>({
    footer : state.footerEdit
})
export default connect(mapStateToProps)(FooterCode)