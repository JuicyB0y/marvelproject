import './charList.scss';
import hero from '../../resources/hero.jpg';

const CharList = () => {
   return (
      <section className="charlist container">
         <div className="charlist__cards">
            <div className="charlist__item">
               <img src={hero} alt="" className="charlist__pic" />
               <h3 className="charlist__name">ABYSS</h3>
            </div>
            <div className="charlist__item">
               <img src={hero} alt="" className="charlist__pic" />
               <h3 className="charlist__name">ABYSS</h3>
            </div>
            <div className="charlist__item">
               <img src={hero} alt="" className="charlist__pic" />
               <h3 className="charlist__name">ABYSS</h3>
            </div>
            <div className="charlist__item">
               <img src={hero} alt="" className="charlist__pic" />
               <h3 className="charlist__name">ABYSS</h3>
            </div>
            <div className="charlist__item">
               <img src={hero} alt="" className="charlist__pic" />
               <h3 className="charlist__name">ABYSS</h3>
            </div>
            <div className="charlist__item">
               <img src={hero} alt="" className="charlist__pic" />
               <h3 className="charlist__name">ABYSS</h3>
            </div>
            <div className="charlist__item">
               <img src={hero} alt="" className="charlist__pic" />
               <h3 className="charlist__name">ABYSS</h3>
            </div>
            <div className="charlist__item">
               <img src={hero} alt="" className="charlist__pic" />
               <h3 className="charlist__name">ABYSS</h3>
            </div>
         </div>
         <button className='button charlist__btn'>LOAD MORE</button>
      </section>
   )
}
export default CharList;