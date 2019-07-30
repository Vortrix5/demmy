import React from "react";


export default function CodeShow(props) {
    return (
        <textarea
            value={props.code}
            style={{
                width: props.width,
                height: props.height,
                maxHeight: 300,
                resize: "none",
                backgroundColor: "#F0F0F0",
                color: "#444",
                paddingLeft: 10,
                marginLeft: 10,
                border: "none",
                textDecoration: "none"
            }} />

    )

}