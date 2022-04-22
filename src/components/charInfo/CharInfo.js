import './charInfo.scss';

import thumbnail from '../../resources/loki.jpg';

const CharInfo = () => {
   return (
      <aside className="charinfo">
         <div className="charinfo__header">
            <img src={thumbnail} alt="" className="charinfo__img" />
            <div className="charinfo__extra">
               <h3 className="charinfo__name">LOKI</h3>
               <button className="charinfo__home button">HOMEPAGE</button>
               <button className="charinfo__wiki button">WIKI</button>
            </div>
         </div>
         <p className="charinfo__text">In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</p>
            <div className="charinfo__comics">Comics:</div>
            <ul className="charinfo__items">
               <li className="charinfo__item">All-Winners Squad: Band of Heroes (2011) #3</li>
               <li className="charinfo__item">Alpha Flight (1983) #50</li>
               <li className="charinfo__item">Amazing Spider-Man (1999) #503</li>
               <li className="charinfo__item">Amazing Spider-Man (1999) #504</li>
            </ul>
      </aside>
   )
}

export default CharInfo;