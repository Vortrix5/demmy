import React from "react"
import {connect} from "react-redux"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


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
function FooterEdit(props){
    const classes = useStyles();
    const handleEdit= (name, event)=>{(
          props.dispatch({type:"FOOTER_EDIT", state:name, value:event})
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
        value={props.footer.title}
        
      />
      <TextField
        id="standard-name"
        label="Description"
        className={classes.textField}
        onChange={(e)=>handleEdit("desc", e.target.value)}
        margin="normal"
        placeholder="Navbar"
        value={props.footer.desc}
        
      />
      <br />
      <TextField
      id="standard-name"
      label="Background Color"
      className={classes.textField}
      onChange={(e)=>handleEdit("bgColor", e.target.value)}
      placeholder="#FFFFF"
      value={props.footer.bgColor}
      margin="normal"
      
    />
    <br />
    <TextField
      id="standard-name"
      label="Text Color"
      className={classes.textField}
      onChange={(e)=>handleEdit("textColor", e.target.value)}
      placeholder="#FFFFF"
      value={props.footer.textColor}
      margin="normal"
      
    />
    <br/>
    </>
)
}


const mapStateToProps=(state)=>({
    footer: state.footerEdit
})

export default connect(mapStateToProps)(FooterEdit)

