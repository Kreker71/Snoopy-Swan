import React from 'react';
import profile_pic from '../img/profile_pic.jpg'

const Card = ({name, field}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{field}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ab rerum amet!</p>
            </div>
            <div className="card-author">
                <a href="#" className="author-avatar">
                    <img src={profile_pic} alt=""/>
                </a>
                <svg className="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
                <div className="author-name">
                    <div className="author-name-prefix">
                        {name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card; 