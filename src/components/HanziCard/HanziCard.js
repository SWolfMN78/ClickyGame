import React from "react";
import "./HanziCard.css";

const HanziCard = props => (
    <div className="card">
        <div className="img-container">
        <a href={props.name} src={props.image} />
        </div>
    </div>
);

export default HanziCard;