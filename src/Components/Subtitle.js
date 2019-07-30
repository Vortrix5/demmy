import React from "react";
import Title from "./Title";

export default function SubTitle({style,...props}) {
  return (
    <Title {...props}
      style={{
        fontSize:20,
        ...style
      }}/>
  )
}