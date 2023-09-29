// #region IMPORTS

import './index.css'

import { useState, useEffect } from 'react';

// #endregion

const MainMenuButton = ({ buttonTitle, buttonStatus, toggleMenu, interfaceIndex, toggleInterfaceIndex }) => {
    
    // #region INIT

    const [mainMenuButtonClass, setMainMenuButtonClass] = useState('');
    const [buttonTitleState, setButtonTitleState] = useState(false);

    // #endregion

    // #region FUNCTIONS

    useEffect(() => {

        if(buttonStatus)
        {
            setMainMenuButtonClass('main-menu-button-open')

            const titleTimer = setTimeout(() => {
                setButtonTitleState(true);
            }, 500);
    
            return () => {
                clearTimeout(titleTimer)
            };
        }
        else
        {
            setMainMenuButtonClass('main-menu-button-close')
            setButtonTitleState(false)
        };

    }, [buttonStatus]);

    function toggleMainMenu() {
        setMainMenuButtonClass('main-button-clicked')

        const toggleTimer = setTimeout(() => {
            toggleMenu();
        }, 600);

        const toggleInterfaceTimer = setTimeout(() => {
            toggleInterfaceIndex(interfaceIndex);
        }, 2000);
    
        return () => {
            clearTimeout(toggleTimer)
            clearTimeout(toggleInterfaceTimer)
        };
    };

    // #endregion

    // #region RETURN

    return (
        <button onClick={ () => toggleMainMenu() } className={ mainMenuButtonClass }>
            { buttonTitleState ? <p className='button-title'>{ buttonTitle }</p> : null }
        </button>
    )

    // #endregion

};

export default MainMenuButton;
