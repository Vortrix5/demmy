import React from "react"
import {connect} from "react-redux"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));
function NavEdit(props){
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedB: false
      });
      const handleChange = name => event => {
        props.dispatch({type:"HANDLE_CHECK"})
      };
      const handleEdit= (name, event)=>{(
          props.dispatch({type:"NAVBAR_EDIT", state:name, value:event})
      )}

    
return(
    <>
    <TextField
        id="standard-name"
        label="Title"
        className={classes.textField}
        onChange={(e)=>handleEdit("title", e.target.value)}
        margin="normal"
        placeholder="Navbar"
        value={props.navbar.title}
        
      />
      <br />
      <TextField
      id="standard-name"
      label="Background Color"
      className={classes.textField}
      onChange={(e)=>handleEdit("bgColor", e.target.value)}
      placeholder="#FFFFF"
      value={props.navbar.bgColor}
      margin="normal"
      
    />
    <br />
    <TextField
      id="standard-name"
      label="Text Color"
      className={classes.textField}
      onChange={(e)=>handleEdit("textColor", e.target.value)}
      placeholder="#FFFFF"
      value={props.navbar.textColor}
      margin="normal"
      
    />
    <br/>
    <br/>
    <FormControlLabel
        style={{marginLeft:5}}
        control={
          <Switch
            checked={props.check}
            onChange={handleChange('checkedB')}
            color="primary"
          />
        }
        label="Login"
      />
    </>
)
}


const mapStateToProps=(state)=>({
    navbar: state.navEdit,
    check :state.check
})

export default connect(mapStateToProps)(NavEdit)

