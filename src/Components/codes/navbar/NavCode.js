import CodeShow from "../../CodeShow";
import React from "react"
import {connect} from "react-redux"
function NavCode(props){
 const navItems= 
`import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import Typography from '@material-ui/core/Typography';
 import Button from '@material-ui/core/Button';
 import IconButton from '@material-ui/core/IconButton';
 import MenuIcon from '@material-ui/icons/Menu';
 import { Form, FormControl, Button} from 'react-bootstrap'
 
 const useStyles = makeStyles(theme => ({
   root: {
     flexGrow: 1,
   },
   title: {
     flexGrow: 1,
   },
 }));
 
 export default function Navbar() {
   const classes = useStyles();
 
   return (
     <div className={classes.root}>
       <AppBar position='static'>
         <Toolbar>
           <Typography variant='h6' className={classes.title}>
            ${props.navbar.title}
           </Typography>
           ${props.navbar.loginC}
         </Toolbar>
       </AppBar>
     </div>
   );
 }`
return(
   <CodeShow height="1200px" width="600px" code={navItems}/>
)}

const mapStateToProps=state=>({
    navbar : state.navEdit
})
export default connect(mapStateToProps)(NavCode)