import './appHeader.scss';

const AppHeader = () => {
   return (
      <div className="container">
         <header className="header">
            <h2 className="header__title"><span className="header__title-red">Marvel</span> information portal</h2>
            <div className="header__links">
               <a href="" className="header__links-char">Characters</a>
               <span>/</span>
               <a href="" className="header__links-comics ">Comics</a>
            </div>
         </header>   
      </div>
   )
}
export default AppHeader;