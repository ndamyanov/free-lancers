import React from 'react';

export default function Card(props) {
    debugger;
    const {name, contacts} = props.person;
    return (
        <div className="card">
            <img src="/blank-profile-poicture.jpg" alt="profile-picture" />
            <h4>{name}</h4>
            <div>*****</div>
            <div>{contacts}</div>
        </div>
    )
}