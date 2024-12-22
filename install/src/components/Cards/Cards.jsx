import React from "react";

export const Cards = ({imgSrc, title, desc}) => {
    return (
        <>
        <div>
            <img src={imgSrc} alt="" />
            <h1>{title}</h1>
            <h2>{desc}</h2>
        </div>
        </>
    )
}