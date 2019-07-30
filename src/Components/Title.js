import React from "react";

export default function Title({style,...props}) {
  return (
    <p {...props}
      style={{
        marginLeft: 10, 
        fontSize:40,
        fontFamily:"Poppins",
        ...style
      }}/>
  )
}