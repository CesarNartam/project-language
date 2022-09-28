import React from "react";
import "../assets/styles/Language.css";

function Language(props) {
    return (
        <div className="container-language">
            <img 
            className="image-language" 
            src={"/src/assets/imgs/" + props.image}
            alt="Language flags" />
            <div className="container-text-language">
                <p className="name-language">{props.placement}.- <strong>{props.spokenLanguage}</strong> </p>
                <p className="speakerNumber-language"><strong>{props.quantity}</strong> {props.notation} de hablantes</p>
                <p className="description-language">{props.description}</p>
            </div>
        </div>
    );
}

export default Language;