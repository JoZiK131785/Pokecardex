// #region IMPORTS

import './index.css'

import MainMenuButton from '../../Buttons/MainMenuButton';

// #endregion

const PokedexMainPanel = ({ activeClass }) => {
    
    // #region INIT

    // #endregion

    // #region FUNCTIONS

    // #endregion

    // #region RETURN

    return (
        <div className={ `main-panel main-panel-${activeClass}` }>
            <MainMenuButton buttonTitle='Toutes les cartes' />
            <MainMenuButton buttonTitle='Ma Collection' />
            <MainMenuButton buttonTitle='Mes Parametres' />
        </div>
    )

    // #endregion

};

export default PokedexMainPanel;
