import React from "react";

const Card = (props) => {
    return (
        <div className='Card'>
            <img className='imgCard' src={props.image}/>
            <h3>{props.name}</h3>
            <h5>By: {props.author}</h5>
            <h5>Genre: {props.genre}</h5>
            <a href={props.link}><button variant='contained'>Webtoon Page</button></a>
        </div>
    )
}
export default Card