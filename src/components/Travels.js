import React from "react"

export default function Travels(props) {
    return (
        <div className="mainCard">
            <img className="travelImage" src={require(`../images/${props.imageUrl}`)}/>
            <div className="cardText">
                <div className="iconText">
                    <img src={require("../images/mapIcon.png")}/>
                    <p className="location">{props.location}</p>
                    <a className="link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
            <hr />
        </div>
    )
}