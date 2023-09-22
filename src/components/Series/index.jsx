// #region IMPORTS

import './index.css'

import React, { useState } from "react";

// #endregion

const Series = () => {

    // #region INIT
    
        const [seriesList, setSeriesList] = useState([]);

    // #endregion

    // #region FUNCTIONS

        const getSeriesList = async () => {

            const url = 'https://api.tcgdex.net/v2/fr/series';

            fetch(url)
                .then((response) => response.json())
                .then((data) => setSeriesList(data))
        };

    // #endregion

    // #region RETURN

    return (
        <div className="series-main-panel">
            <button onClick={getSeriesList}>Recuperer la liste</button>
            <ul className="series-list">
                {seriesList.map((serie) => {
                    return <li key={serie.id}>{serie.name}</li>
                })}
            </ul>
        </div>
    )

    // #endregion

};

export default Series;