// #region IMPORTS

import './index.css'

import { Link } from 'react-router-dom';

// #endregion

const Home = () => {

    // #region RETURN

    return (
        <div className="home-main-panel">
            <p>HOME</p>
            <Link to="/series">Accéder à Series</Link>
        </div>
    )

    // #endregion

};

export default Home;
