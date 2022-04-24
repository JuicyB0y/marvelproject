import './charInfo.scss';
import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import thumbnail from '../../resources/loki.jpg';

const CharInfo = (props) => {

   const [char, setChar] = useState([]);

   const {getCharacter, clearError, setProcess} = MarvelService();

   useEffect(() => {
      updateChar();
   }, [props.charId])

   const updateChar = () => {
      const {charId} = props;
      if (!charId) 
         return;
      getCharacter(charId)
         .then(onCharLoaded)
         .then(setProcess('confirmed'))
   }

   const onCharLoaded = (char) => {
      setChar(char);
   }

   return (
      <aside className="charinfo">
         {setContent(process, View, char)}
      </aside>
   )
}

const View = ({data}) => {
   const {name, description, thumbnail, homepage, wiki, comics} = data;

   let imgStyle = {'objectFit' : 'cover'};
   if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
      imgStyle = {'objectFit' : 'contain'}
   }

   return (
      <>
         <div className="charinfo__header">
            <img src={thumbnail} alt="" className="charinfo__img" style={imgStyle}/>
            <div className="charinfo__extra">
               <h3 className="charinfo__name">{name}</h3>
               <button className="charinfo__home button">HOMEPAGE</button>
               <button className="charinfo__wiki button">WIKI</button>
            </div>
         </div>
         <p className="charinfo__text">{description}</p>
            <div className="charinfo__comics">Comics:</div>
            <ul className="charinfo__items">
            {comics.length > 0 ? null : 'There is no comics with such character'}
               {
                  comics.map((item, i) => {
                     if (i > 9) return;
                     return (
                        <li key={i} className="charinfo__item">{item.name}</li>
                     )
                  })
               }

            </ul>
      </>
   )
}

export default CharInfo;