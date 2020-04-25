import React, {useState} from 'react';
import UserCreate from './user-create';
import LanguageContext from '../context/language-context';
import ColorCreate from '../context/color-contex';
import LanguageSelector from '../components/language-selector';

const App = () => {
 
  const [language, setLanguage] = useState('eng');
  return (
    <div className="ui container">
      <LanguageSelector 
        onLanguageChange={language => setLanguage(language)}
      />
      <LanguageContext.Provider value={language}>
        <ColorCreate.Provider value="red">
          <UserCreate />
        </ColorCreate.Provider>
      </LanguageContext.Provider>
      
    </div>
  );
}

export default App;
