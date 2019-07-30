import React from "react";
import {connect} from "react-redux"

 function ContentEditable({style, isEditing,...props}) {
  return (
    <p {...props}
      contentEditable={isEditing}/>
  )
}

const mapStateToProps = (state)=>({
    isEditing:state.isEditing
})

export default connect(mapStateToProps)(ContentEditable)