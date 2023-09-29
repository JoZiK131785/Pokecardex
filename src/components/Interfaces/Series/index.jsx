// #region IMPORTS

import './index.css'

import { useState, useEffect } from 'react';

// #endregion

const Series = ({ toggleInterfaceIndex, toggleCurrentSerie }) => {
    
    // #region INIT

    const [seriesInterfaceStatus, setSeriesInterfaceStatus] = useState('series-interface-open');
    const [seriesList, setSeriesList] = useState([]);
    const [visibleSeries, setVisibleSeries] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 9;

    const urlSeries = 'https://api.tcgdex.net/v2/fr/series';

    // #endregion

    // #region FUNCTIONS

        useEffect(() => {

            fetch(urlSeries)
                .then((response) => response.json())
                .then((data) => setSeriesList(data))
                
        }, []);

        useEffect(() => {
            const end = startIndex + itemsPerPage;
            const newVisibleSeries = seriesList.slice(startIndex, end);

            setVisibleSeries(newVisibleSeries);
        }, [startIndex, seriesList]);

        const loadMoreItems = () => {
            setStartIndex(startIndex + itemsPerPage);
        };

        const goBack = () => {
            const newStartIndex = Math.max(startIndex - itemsPerPage, 0);

            setStartIndex(newStartIndex);
        };

    // #endregion

    // #region RETURN

    return (
        <div className={ seriesInterfaceStatus } >
            <ul className="series-list-panel">
                {visibleSeries.map((serie) => (
                    <li key={serie.id}>
                        <button onClick={ () => toggleCurrentSerie(serie.name) }>{ serie.name }</button>
                    </li>
                ))}
            </ul>
            <nav className="series-nav">
                {startIndex > 0 && (
                    <button onClick={ goBack }>Back</button>
                )}
                {seriesList.length > startIndex + itemsPerPage && (
                    <button onClick={ loadMoreItems }>Load More</button>
                )}
            </nav>
        </div>
    )

    // #endregion

};

export default Series;