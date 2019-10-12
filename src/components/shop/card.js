import React from "react"
import {formatNumber} from "../services/util"
// import Input from "./input"


const Card = ({name, price, imgUrl, description, children, wallet}) => {
    const classNames = require('classnames');
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={
                            !!imgUrl
                                ? imgUrl
                                : "https://bulma.io/images/placeholders/1280x960.png"
                        }
                        alt="Placeholder"
                    />
                </figure>
            </div>
            <div className={classNames({
                'card-content is-shopping-card': true,
                'has-background-light': price > wallet,
            })}>
                <div className="media mb-1">
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className={classNames({
                            'subtitle is-4': true,
                            'has-text-danger': price > wallet
                        })}>₱ {formatNumber(price)}</p>
                    </div>
                </div>
                <div className="content">{description}</div>
            </div>

            <div className={classNames({
                'card-footer': true,
                'has-background-light': price > wallet,
            })}>
                <center>{children}</center>
            </div>
        </div>
    )
}

export default Card
