// #region IMPORTS

import './index.css'

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// #endregion

const Serie = () => {

    // #region INIT

    const { id } = useParams();

    const [serieDetails, setSerieDetails] = useState([]);

    const urlSeries = `https://api.tcgdex.net/v2/fr/series/${id}`;

    useEffect(() => {

        fetch(urlSeries)
            .then((response) => response.json())
            .then((data) => setSerieDetails(data.sets));
            
    }, [urlSeries]);

    // #endregion

    // #region FUNCTIONS

    // #endregion

    // #region RETURN

    return (
        <div className="serie-main-panel">
            <p>SERIE</p>
            <ul className="serie-detail">
                {serieDetails.map((detail) => (
                    <li key={detail.id}>
                        <Link to={`/set/${detail.id}`}>{detail.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

    // #endregion

};

export default Serie;