import React from 'react';
import { Link } from "react-router-dom";

export default function CardItem(props) {
    return (
        <>
            <li className="card-item">
                <Link className="card-item__link" to={props.path}>
                    <figure className="card-item__img-wrap" data-category={props.label}>
                        <img src={props.src} 
                        alt="Travel" className="card-item__img" />
                    </figure>
                    <div className="card-item__info">
                        <h5 className="card-item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}
