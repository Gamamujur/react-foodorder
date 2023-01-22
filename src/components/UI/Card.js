import React from "react";

const Card = props =>{
    return (
        <div className="bg-yellow-700 p-5 rounded-3xl shadow-md shadow-black">{props.children}</div>
    )
}

export default Card
