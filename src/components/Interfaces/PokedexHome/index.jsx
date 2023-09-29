// #region IMPORTS

import './index.css'

import { useState, useEffect } from 'react';

import MainMenuButton from '../../Buttons/MainMenuButton';

// #endregion

const PokedexHome = ({ toggleInterfaceIndex }) => {
    
    // #region INIT

    const [showButton1, setShowButton1] = useState(false);
    const [showButton2, setShowButton2] = useState(false);
    const [showButton3, setShowButton3] = useState(false);

    const [buttonStatus1, setButtonStatus1] = useState(true);
    const [buttonStatus2, setButtonStatus2] = useState(true);
    const [buttonStatus3, setButtonStatus3] = useState(true);

    const [homeInterfaceStatus, setHomeInterfaceStatus] = useState('home-interface-open');

    // #endregion

    // #region FUNCTIONS

    useEffect(() => {
        
        const timer1 = setTimeout(() => {
            setShowButton1(true);
        }, 200);

        const timer2 = setTimeout(() => {
            setShowButton2(true);
        }, 400);

        const timer3 = setTimeout(() => {
            setShowButton3(true);
        }, 600);

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
        };

    }, []);

    function closeHomeInterfaceStatus() {

        setButtonStatus1(false);

        const closeTimer2 = setTimeout(() => {
            setButtonStatus2(false);
        }, 200);

        const closeTimer3 = setTimeout(() => {
            setButtonStatus3(false);
        }, 400);

        const interfaceTimer = setTimeout(() => {
            setHomeInterfaceStatus('home-interface-close')
        }, 600);

        return () => {
            clearTimeout(interfaceTimer)
            clearTimeout(closeTimer2)
            clearTimeout(closeTimer3)
        };
        
    };

    // #endregion

    // #region RETURN

    return (
        <div className={ homeInterfaceStatus } >

            { showButton1 ? <MainMenuButton 
                                buttonTitle='Toutes les cartes' 
                                buttonStatus={ buttonStatus1 }  
                                toggleMenu={ () => closeHomeInterfaceStatus() } 
                                interfaceIndex={ 2 }
                                toggleInterfaceIndex={ toggleInterfaceIndex }
                            /> : null }

            { showButton2 ? <MainMenuButton 
                                buttonTitle='Ma Collection' 
                                buttonStatus={ buttonStatus2 }  
                                toggleMenu={ () => closeHomeInterfaceStatus() } 
                                interfaceIndex={ 3 }
                                toggleInterfaceIndex={ toggleInterfaceIndex }
                            /> : null }

            { showButton3 ? <MainMenuButton 
                                buttonTitle='Mes Parametres' 
                                buttonStatus={ buttonStatus3 }  
                                toggleMenu={ () => closeHomeInterfaceStatus() } 
                                interfaceIndex={ 4 }
                                toggleInterfaceIndex={ toggleInterfaceIndex }
                            /> : null }
        </div>
    )

    // #endregion

};

export default PokedexHome;
