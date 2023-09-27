// #region IMPORTS

import './index.css'

// #endregion

const PokedexPanel = ({ positionClass, activeClass }) => {
    
    // #region INIT

    // #endregion

    // #region FUNCTIONS

    // #endregion

    // #region RETURN

    return (
        <ul className={ `pokedex-main-panel-${positionClass} ${positionClass}-${activeClass}` }>
            <li className={ `pokedex-panel1 pokedex-panel1-${activeClass}` }></li>
            <li className='pokedex-panel2'></li>
            <li className='pokedex-panel3'></li>
            <li className='pokedex-panel4'></li>
            <li className='pokedex-panel5'></li>
        </ul>
    )

    // #endregion

};

export default PokedexPanel;