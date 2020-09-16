import React from 'react';
import Card from './Card';

const CardList = () => {
    return (
        <div className="container our-team">
            <div className="center">
                <div className="card-list">
                    <Card name="Codrut Ursache" field="Programmer"/>
                    <Card name="Mara Belu" field="Designer"/>
                    <Card name="Bogdan Dragomir" field="Programmer"/>
                    <Card name="Mara Mocanu" field="Designer"/>
                </div>
            </div>        
        </div>
        
    )
}

export default CardList; 