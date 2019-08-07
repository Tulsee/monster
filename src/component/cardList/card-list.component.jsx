import React from 'react';

import { Card } from "../../component/card/card.component"

import './card-list.style.css';


export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monster.map(monster =>
                <Card key={monster.id} monster={monster} />)}
        </div>)
}