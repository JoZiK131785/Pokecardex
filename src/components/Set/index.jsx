// #region IMPORTS

import './index.css'

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// #endregion

const Set = () => {

    // #region INIT

    const { id } = useParams();

    const [setDetails, setSetDetails] = useState([]);

    const urlSet = `https://api.tcgdex.net/v2/fr/sets/${id}`;

    useEffect(() => {

        fetch(urlSet)
            .then((response) => response.json())
            .then((data) => setSetDetails(data.cards));
            
    }, [urlSet]);
    
    // #endregion

    // #region FUNCTIONS

    // #endregion

    // #region RETURN

    return (
        <div className="set-main-panel">
            <p>SET</p>
            <ul className="set-detail">
                {setDetails.map((card) => (
                    <li key={card.id}>
                        <Link to={`/set/${card.id}`}>{card.name}</Link>
                        <img src={`${card.image}/high.webp`} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    )

    // #endregion

};

export default Set;