// #region IMPORTS

import './index.css'

import { useState, useEffect } from 'react';

import PokedexPanel from '../../Panels/PokedexPanel';
import PokedexMainPanel from '../../Panels/PokedexMainPanel';

// #endregion

const Pokecardex = () => {
    
    // #region INIT

    const [statusBool, setStatusBool] = useState(false);
    const [activeButton, setActiveButton] = useState(true);
    const [activeClass, setActiveClass] = useState("close");

    // #endregion

    // #region FUNCTIONS

    useEffect(() => {
        if (statusBool) {
            setActiveClass("open");
            setActiveButton(false);
        } else {
            setActiveClass("close");
            setActiveButton(true);
        }
    }, [statusBool]);

    // #endregion

    // #region RETURN

    return (
        <div className="home-main-panel">
            <PokedexMainPanel activeClass={ activeClass } />
            <PokedexPanel positionClass="left" activeClass={ activeClass } />
            <PokedexPanel positionClass="right" activeClass={ activeClass } />
            { activeButton && <button className="main-button" onClick={ () => setStatusBool(!statusBool) }></button> }
        </div>
    )

    // #endregion

};

export default Pokecardex;
