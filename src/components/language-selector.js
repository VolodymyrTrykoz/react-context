import React from 'react';


const LanguageSelector = ({onLanguageChange}) => {

    return(
        <>
            <div>
                Select a language 
            </div>
            <i className="flag us" onClick = { () => onLanguageChange('eng') }/>
            <i className="flag ua" onClick = { () => onLanguageChange('ua') }/>
        </>
    )
}

export default LanguageSelector;