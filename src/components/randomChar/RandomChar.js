import './randomChar.scss';
import thor from '../../resources/Thumbnailthor.jpg';
import image from '../../resources/Decorationmjholnir.png';

import MarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import { useState } from 'react';

const RandomChar = () => {
   const [char, setChar] = useState([]);

   const {loading, error, getAllCharacters, getCharacter, clearError, setProcess} = MarvelService();

   const onCharLoaded = (char) => {
      setChar(char);
   }

   const updateChar = () => {
      const id = Math.floor(Math.random() * (1011400 - 101100) + 101100);
      getCharacter(id)
         .then(onCharLoaded)
         .then(setProcess('confirmed'))
   }

   return (
      <div className="container">
         <div className="randomchar">
               {setContent(process, View, char)}
            <div className="randomchar__static">
               <p className="randomchar__today">Random character for today! <br/>Do you want to get to know him better?</p>
               <p className="randomchar__choice">Or choose another one</p>
               <button onClick={updateChar()} className="randomchar__generate">TRY IT</button>
               <img src={image} alt="" className="randomchar__image" />
            </div>
         </div>
      </div>
)
}

const View = ({data}) => {
   const {name, description, thumbnail, homepage, wiki} = data;
   return (
      <div className="randomchar__dynamic">
      <img src={thumbnail} alt="" className="randomchar__thumbnail"/>
      <div className="randomchar__descr">
         <h3 className="randomchar__subtitle">{name}</h3>
         <p className="randomchar__text">{description}</p>
         <a href={homepage} className="randomchar__homepage button"><span className="randomchar__inner">HOMEPAGE</span></a>
         <a href={wiki} className="randomchar__wiki">WIKI</a>
      </div>
   </div>
   )
}

export default RandomChar;