import React from 'react';
import {connect} from "react-redux"
import FooterEdit from '../codes/footer/FooterEdit';
import Modals from "../Modal"
import LandCode from '../codes/land/LandCode';
import LandPreview from '../codes/land/LandPreview';
import LandEdit from '../codes/land/LandEdit';



function LandModal(props) {
 return(      
 <Modals opens={props.open} nam="land" config={<LandEdit/>} coded={<LandCode/>} preview={<LandPreview/>}/>
 )

}

const mapStateToProps=(state)=>({
  open: state.landOpen,
  navbar: state.navbar
})

export default connect(mapStateToProps)(LandModal)