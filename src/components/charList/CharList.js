import './charList.scss';
import hero from '../../resources/hero.jpg';
import MarvelService from '../../services/MarvelService';

import { useEffect, useRef, useState} from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMEssage';

const setContent = (process, Component, newItemLoading) => {
   switch (process) {
      case 'waiting':
         return <Spinner/>;
      case 'loading':
         return newItemLoading ? <Component/> : <Spinner/>;
      case 'confirmed':
         return <Component/>;
      case 'error':
         return <ErrorMessage/>;
      default:
         throw new Error ('Unexpected process state');
   }
}

const CharList = (props) => {
   const [charList, setcharList] = useState([]);
   const [ended, setended] = useState(false);
   const [offset, setOffset] = useState(210);
   const [newItemLoading, setnewItemLoading] = useState(false);


   const {loading, error, getAllCharacters, getCharacter, clearError, process, setProcess} = MarvelService();


   const onCharListLoaded = (newCharList) => {
      let ended = false;
      if (charList.length < 9) {
         ended = true
      }
      setcharList([...charList, ...newCharList]);
      setnewItemLoading(false)
      setOffset(offset + 9);
      setended(ended);
   }

   const onRequest = (offset, initial) => {
      initial ? setnewItemLoading(false) : setnewItemLoading(true);
      getAllCharacters()
         .then(onCharListLoaded)
         .then(setProcess('confirmed'))
   }

   useEffect(() => {
      onRequest(offset, true);
   }, [])

   const itemfocus = useRef([]);

   const focusOnItem = (id) => {
      itemfocus.current.forEach(item => item.classList.remove('active__class'));
      itemfocus.current[id].classList.add('active__class');
      itemfocus.current[id].focus();
   }

   const renderItems = (arr) => {
      const items = arr.map(({item, i}) => {

         // key={item.id} - уникальный id передается в пропсы и используется в charinfo
         return (
            <div className="charlist__cards" 
            ref={el => itemfocus.current[i] = el} 
            key={item.id} 
            onClick={() => {props.onCharSelected(item.id); focusOnItem(i)}}>
               <div className="charlist__item">
                  <img src={item.thumbnail} alt="" className="charlist__pic" />
                  <h3 className="charlist__name">{item.name}</h3>
               </div>
            </div>
         )
      })
   }

   return (
      <section className="charlist container">
         {setContent(process, () => renderItems(charList), newItemLoading)}
         <button disabled={newItemLoading} styles={{'display' : ended ? 'none' : 'block'}} className='button charlist__btn'>LOAD MORE</button>
      </section>
   )
}
export default CharList;