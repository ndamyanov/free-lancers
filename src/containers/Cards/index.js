import React from "react";
import Card from "../../components/Card"

export function Cards() {

const mockedFreelancers = [
    {name: 'Gosho', service:'plumber', rating: 3, contacts: '08751654'},
    {name: 'Pesho', service:'builder', rating: 4, contacts: '08465165'},
    {name: 'Ivan', service:'painter', rating: 5, contacts: '0848548965'},
    {name: 'Alex', service:'marketing', rating: 2, contacts: '08465476'},
    {name: 'Alex', service:'designer', rating: 1, contacts: '08465476'},
    {name: 'Alex', service:'seller', rating: 2, contacts: '08465476'},
]

const listFreelancers = mockedFreelancers.map((fr) =>
    <Card person={fr}/>
);
    
    return(
        <>
        <div className="filters">
            <div>Plumber</div>
            <div>Builder</div>
            <div>Painter</div>
            <div>Cleaner</div>
            <div>Gardener</div>
            <div>Cooker</div>
            <div>Electriker</div>
            <div>Designer</div>
            <div>Musician</div>
            <div>Teacher</div>
        </div>
        <div className="cards">
            {listFreelancers}
        </div>
        </>
    )
}