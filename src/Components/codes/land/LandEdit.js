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
function LandEdit(props){
    const classes = useStyles();
    const handleEdit= (name, event)=>{(
          props.dispatch({type:"LAND_EDIT", state:name, value:event})
      )}

    
return(
    <>
    <TextField
        id="standard-name"
        label="First Image Link"
        className={classes.textField}
        onChange={(e)=>handleEdit("first", e.target.value)}
        margin="normal"
        value={props.land.first}
        style={{width:"400px"}}
        
      />
      <br/>
      <TextField
        id="standard-name"
        label="Second Image Link"
        className={classes.textField}
        onChange={(e)=>handleEdit("second", e.target.value)}
        margin="normal"
        value={props.land.second}
        style={{width:"400px"}}
        
      />
      <br/>
      <TextField
        id="standard-name"
        label="Third Image Link"
        className={classes.textField}
        onChange={(e)=>handleEdit("third", e.target.value)}
        margin="normal"
        value={props.land.third}
        style={{width:"400px"}}
        
      />
    <br/>
    </>
)
}


const mapStateToProps=(state)=>({
    land: state.landEdit
})

export default connect(mapStateToProps)(LandEdit)

