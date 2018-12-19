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
          <div>
            <i class="fas fa-home"></i>
            <li><a 
            onClick={props.close} 
            href="/#accueil">Accueil</a></li>
          </div>

          <hr/>

          <div>
            <i class="fas fa-rocket"></i>
            <li><a 
            onClick={props.close} 
            href="/#listeDefis">Liste Défis</a></li>
            <li><a 
            onClick={props.close} 
            href="/#mesDefis">Mes Défis</a></li>
          </div>
          
          <hr/>

          <div>
            <i class="fas fa-lightbulb"></i>
            <li><a 
            onClick={props.close} 
            href="/#listeIdees">Liste Idées</a></li>
            <li><a 
            onClick={props.close} 
            href="/#mesIdees">Mes Idées</a></li>
          </div>
          
          <hr/>
          
          <div>
            <i class="fas fa-user-circle"></i>
            <li><a 
            onClick={props.close} 
            href="/#profil">Mon Profil</a></li>
          </div>
          
          <hr/>

          <div>
            <i class="fas fa-info-circle"></i>
            <li><a 
            onClick={props.close} 
            href="/#aide">Aide</a></li>
          </div>          
        </ul>

    </nav>
  )
}


export default SideDrawer;