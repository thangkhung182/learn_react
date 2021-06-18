import React from "react";

export default function Message(props) {
    return(
        <div className={"h5 bg-" + props.theme + " text-white p-2"}>
            {props.message}
        </div>
    )
}