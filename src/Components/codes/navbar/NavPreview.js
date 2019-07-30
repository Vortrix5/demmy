import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux"
import { Form, FormControl, Button} from 'react-bootstrap'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 200,
  }
}));

function NavPreview(props) {
  const classes = useStyles();
  const navItems = 
   <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:props.navbar.bgColor}}>
        <Toolbar>
          <Typography variant="h6" style={{color:props.navbar.textColor}} className={classes.title}>
            {props.navbar.title}
          </Typography>
          <Form inline style={{display:props.navbar.login}}>
                        <FormControl type="email" placeholder="Email" required autoComplete="email" style={{borderRadius:3, marginRight:10, border:"none"}} className="mr-sm-2" />
                        <FormControl type="password" placeholder="Password" required autoComplete="password" style={{borderRadius:3, marginRight:10, border:"none"}} className="mr-sm-2" />
                        <Button variant="outline-primary">Login</Button>
                    </Form>
        </Toolbar>
      </AppBar>
    </div>
  

  return (
    <div>{navItems}</div>
  );
}

const mapStateToProps=state=>({
    navbar:state.navEdit
})

export default connect(mapStateToProps)(NavPreview)