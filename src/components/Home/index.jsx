// #region IMPORTS

import './index.css'

import { useNavigate } from 'react-router-dom';

// #endregion

const Home = () => {

    // #region INIT

        const navigate = useNavigate();

        const handleNavigateToSets = () => {
            navigate('/sets');
        };

        const handleNavigateToSeries = () => {
            navigate('/series');
        };

    // #endregion

    // #region FUNCTIONS

    // #endregion

    // #region RETURN

    return (
        <div className="home-main-panel">
            <p>HOME</p>
            <button onClick={handleNavigateToSets}>Accéder à Sets</button>
            <button onClick={handleNavigateToSeries}>Accéder à Series</button>
        </div>
    )

    // #endregion

};

export default Home;