import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div>
                <img className="image-container" src={require(`./images/${props.imageUrl}`)} alt="profile"></img>
            </div>
            <div className="content-container">
                <div className="location">
                    <h3><i class="bi bi-geo-alt-fill"></i> {props.Country}</h3>
                    <h3> <a href={`${props.google_maps_location}`}>View On Google Maps</a></h3>
                </div>
                <h1>{props.Name}</h1>
                <h3 className="dates">{props.DateFrom}-{props.DateTo}</h3>
                <p> {props.Description}</p>
            </div>
        </div>
    )
}