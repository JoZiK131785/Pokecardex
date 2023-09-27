// #region IMPORTS

import './index.css'

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// #endregion

const Series = () => {

    // #region INIT

        const [seriesList, setSeriesList] = useState([]);

        const urlSeries = 'https://api.tcgdex.net/v2/fr/series';

        useEffect(() => {

            fetch(urlSeries)
                .then((response) => response.json())
                .then((data) => setSeriesList(data))
                
        }, []);

    // #endregion

    // #region FUNCTIONS

    

    // #endregion

    // #region RETURN

    return (
        <div className="series-main-panel">
            <p>SERIES</p>
            <ul className="series-list">
                {seriesList.map((serie) => (
                    <li key={serie.id}>
                        <Link to={`/serie/${serie.id}`}>{serie.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

    // #endregion

};

export default Series;