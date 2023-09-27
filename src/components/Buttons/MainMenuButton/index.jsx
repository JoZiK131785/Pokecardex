// #region IMPORTS

import './index.css'

// #endregion

const MainMenuButton = ({ buttonTitle }) => {
    
    // #region INIT

    // #endregion

    // #region FUNCTIONS

    function toggleMainMenu() {
        console.log('toggleMainMenu');
    };

    // #endregion

    // #region RETURN

    return (
        <button onClick={ () => toggleMainMenu() } className='main-menu-button'>
            <p>{ buttonTitle }</p>
        </button>
    )

    // #endregion

};

export default MainMenuButton;
