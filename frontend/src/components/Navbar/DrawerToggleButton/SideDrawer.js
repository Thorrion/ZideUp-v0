import React from 'react';
import './SideDrawer.scss'
// MOBILE MENU

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (

    <nav className={drawerClasses}>

      <ul>
          <div >
            <i className="fas fa-home"></i>
            <li><a 
            onClick={props.close} 
            href="/#accueil" className="Acceuil">Accueil</a></li>
          </div>

          <hr/>

          <div className="zz">
            
            <li><a 
            onClick={props.close} 
            href="/#listeDefis">Liste Défis</a></li>
            <i className="fas fa-rocket"></i>
            <hr className="TwoObj"/>
            <li><a 
            onClick={props.close} 
            href="/#mesDefis">Mes Défis</a></li>
          </div>
          
          <hr/>

          <div>
            
            <li><a 
            onClick={props.close} 
            href="/#listeIdees">Liste Idées</a></li>
            <i className="fas fa-lightbulb"></i>
            <hr className="TwoObj"/>
            <li><a 
            onClick={props.close} 
            href="/#mesIdees">Mes Idées</a></li>
          </div>
          
          <hr/>
          
          <div>
            <i className="fas fa-user-circle"></i>
            <li><a 
            onClick={props.close} 
            href="/#profil">Mon Profil</a></li>
          </div>
          
          <hr/>

          <div>
            <i className="fas fa-info-circle"></i>
            <li><a 
            onClick={props.close} 
            href="/#aide">Aide</a></li>
          </div>          
        </ul>

    </nav>
  )
}


export default SideDrawer;


