import React from 'react';
import {connect} from "react-redux"
import Modals from '../Modal';
import NavCode from '../codes/navbar/NavCode';
import NavPreview from '../codes/navbar/NavPreview';
import NavEdit from '../codes/navbar/NavEdit';

function NavbarModal(props) {
  return (
      <Modals opens={props.open} nam="navbar" config={<NavEdit/>} coded={<NavCode/>} preview={<NavPreview/>}/>
  );
}

const mapStateToProps=(state)=>({
  open: state.navOpen,
  navbar: state.navbar
})

export default connect(mapStateToProps)(NavbarModal)