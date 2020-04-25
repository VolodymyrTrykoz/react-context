import React, {Component} from 'react';
import LanguageContext from '../context/language-context';

class Field extends Component{
    render(){
        return(
            <div className="ui field">
                <label>{this.context === 'eng' ? 'Name': 'Ім`я'}</label>
                <input/>
            </div>
        )
    }
}

Field.contextType = LanguageContext;
export default Field;
