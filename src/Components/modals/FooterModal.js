import React from 'react';
import {connect} from "react-redux"
import FooterEdit from '../codes/footer/FooterEdit';
import Modals from "../Modal"
import FooterCode from '../codes/footer/FooterCode';
import FooterPreview from '../codes/footer/FooterPreview';


function FooterModal(props) {
 return(      
 <Modals opens={props.open} nam="footer" config={<FooterEdit/>} coded={<FooterCode/>} preview={<FooterPreview/>}/>
 )

}

const mapStateToProps=(state)=>({
  open: state.footerOpen,
  navbar: state.navbar
})

export default connect(mapStateToProps)(FooterModal)