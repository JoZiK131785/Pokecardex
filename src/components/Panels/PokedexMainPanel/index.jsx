// #region IMPORTS

import './index.css'

import { useState, useEffect } from 'react';

import PokedexHome from '../../Interfaces/PokedexHome';
import Series from '../../Interfaces/Series';

// #endregion

const PokedexMainPanel = ({ activeClass }) => {
    
    // #region INIT

    const [interfaceIndex, setInterfaceIndex] = useState(0);
    const [currentSerie, setCurrentSerie] = useState('');

    // #endregion

    // #region FUNCTIONS

    useEffect(() => {
        if(activeClass === 'open') {
            setTimeout(() => {
                setInterfaceIndex(1);
            }, 500);
        }
    }, [activeClass]);

    useEffect(() => {
        console.log(currentSerie);
    }, [currentSerie]);

    const toggleInterfaceIndex = (index) => {
        setInterfaceIndex(index);
    };

    // #endregion

    // #region RETURN

    return (
        <div className={ `main-panel main-panel-${activeClass}` }>
            { interfaceIndex === 1 ? <PokedexHome toggleInterfaceIndex={ (index) => toggleInterfaceIndex(index) } /> : null }
            { interfaceIndex === 2 ? <Series toggleInterfaceIndex={ (index) => toggleInterfaceIndex(index) } toggleCurrentSerie={ (name) => setCurrentSerie(name) } /> : null }
            { interfaceIndex === 3 ? <p className='test'>3</p> : null }
        </div>
    )

    // #endregion

};

export default PokedexMainPanel;
