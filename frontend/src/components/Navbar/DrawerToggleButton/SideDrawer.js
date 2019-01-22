import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom"
// MOBILE MENU

const styles = theme => ({
  container: {
    paddingTop: "2em",
    display: "flex",
    height: "96em",
    boxShadow: "-5px 0px 5px rgba(119, 119, 119, 0.6)",
    position: "fixed",
    top: "4em",
    right: "0",
    width: "65%",
    maxWidth: "400px",
    zIndex: "2000",
    transform: "translateX(105%)",
    transition: "transform 0.3s ease-out",
    backgroundColor: "#222222c9",
  },
  container1: {
    paddingTop: "2em",
    display: "flex",
    flexDirection: 'column',
    height: "96em",
    boxShadow: "-5px 0px 5px rgba(119, 119, 119, 0.6)",
    position: "fixed",
    top: "4em",
    right: "0",
    width: "65%",
    maxWidth: "400px",
    zIndex: "2000",
    transform: "translateX(0%)",
    transition: "transform 0.3s ease-out",
    backgroundColor: "#222222c9",
  },
  title: {
    color: "white",
    fontSize: "5vw",
    textAlign: "right",
    marginTop: '2.5vw',
    paddingRight: "10vw",
    margin: 0,
    textDecoration: 'none',
  },
  hr: {
    borderColor: "white",
    marginLeft: "11.5%",
    width: "77%",
    margin: "1em 0"
  }
});

class SideDrawer extends Component {
  render() {
    const { classes } = this.props;
    let drawerClasses = classes.container;
    if (this.props.show) {
      drawerClasses = classes.container1;
    }
    return (

      <Grid className={drawerClasses}>

{/* ACCUEIL */}

        <NavLink to="/" onClick={this.props.close}>
          <Grid container>
            <Grid item xs={2}>
            <i style={{fontSize: "8vw", margin: "2vw 10vw", color: "white"}} className="fas fa-home"></i>
            </Grid>

            <Grid item xs={10} >
              <p className={classes.title}>Accueil</p>
            </Grid>
          </Grid>
        </NavLink>
        
        <hr className={classes.hr}/>

{/* DEFIS */}

        <NavLink to="/3" onClick={this.props.close}>
          <Grid container>
            <Grid item xs={2}>
            <i style={{fontSize: "8vw", margin: "2vw 10vw", color: "white"}} className="fas fa-rocket"></i>
            </Grid>

            <Grid item xs={10} >
              <p className={classes.title}>Défis</p>
            </Grid>
          </Grid>
        </NavLink>
        
        <hr className={classes.hr}/>
        
{/* IDEES */}

        <NavLink to="/3" onClick={this.props.close}>
          <Grid container>
            <Grid item xs={2}>
            <i style={{fontSize: "8vw", margin: "2vw 10vw", color: "white"}} className="fas fa-lightbulb"></i>
            </Grid>

            <Grid item xs={10} >
              <p className={classes.title}>Idées</p>
            </Grid>
          </Grid>
        </NavLink>
        
        <hr className={classes.hr}/>

{/* PROFIL */}
        <NavLink to="/3" onClick={this.props.close}>
          <Grid container>
            <Grid item xs={2}>
            <i style={{fontSize: "8vw", margin: "2vw 10vw", color: "white"}} className="fas fa-user-circle"></i>
            </Grid>

            <Grid item xs={10} >
              <p className={classes.title}>Mon Profil</p>
            </Grid>
          </Grid>
        </NavLink>
        
        <hr className={classes.hr}/>

{/* AIDE */}

        <NavLink to="/3" onClick={this.props.close}>
          <Grid container>
            <Grid item xs={2}>
            <i style={{fontSize: "8vw", margin: "2vw 10vw", color: "white"}} className="fas fa-info-circle"></i>
            </Grid>

            <Grid item xs={10} >
              <p className={classes.title}>Aide</p>
            </Grid>
          </Grid>
        </NavLink>       

      </Grid>
    )
  }
}


export default withStyles(styles)(SideDrawer)


