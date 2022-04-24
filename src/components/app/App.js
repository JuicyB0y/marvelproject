import { useState } from 'react';

import '../appHeader/AppHeader';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import content from '../../resources/assetvision.jpg';

import './app.scss';

const App = () => {
  
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  }
  return (
    <div className="App">
      <AppHeader/>
      <main>
        <RandomChar/>
        <div className="charcontent container">
          <CharList onCharSelected={onCharSelected}/>
          <CharInfo charId={selectedChar}/>
        </div>
      </main>
      <img src={content} alt="" className="img__content" />
    </div>
  );
}

export default App;
