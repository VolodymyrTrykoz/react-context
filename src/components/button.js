import React, {Component} from 'react';
import LanguageContext from '../context/language-context';
import ColorCreate from '../context/color-contex';

class Button extends Component {

    renderButton = color => (
        <button className={`ui button ${color === 'red' ? 'negative' : 'primary'}`}>
            <LanguageContext.Consumer>
                {value => value === 'eng' ? 'Submit': 'Відправити'}
            </LanguageContext.Consumer> 
        </button>
    )

    render(){
        return(
            <ColorCreate.Consumer>
                { color => this.renderButton(color) }
            </ColorCreate.Consumer>
        )
    }
}

export default Button;
