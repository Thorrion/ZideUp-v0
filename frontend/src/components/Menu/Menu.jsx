import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import All from '../Dashboard/All';
import { NavLink } from 'react-router-dom'
import MyChallenge from '../Dashboard/MyChallenge';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw",
    paddingTop: "5em",
  },
  search: {
    position: 'relative',
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#0c54a7"
  },
  inputRoot: {
    color: '#0c54a7',
    width: '90vw',
    border: "solid 1px",
    borderRadius: "25px",
    margin: "1vw 5vw"

  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    width: '100%',
  },
  button: {
    position: "fixed",
    height: "15vw",
    width: "15vw",
    bottom: "3vh",
    left: "42.5vw", 
    backgroundColor: "white",
    borderRadius: "50%",
  }
});

class Menu extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.container}>
        <AppBar position="fixed" style={{marginTop: "4em"}} color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="Tous" />
            <Tab label="Mes défis" />
          </Tabs>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Recherche"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><All/></TabContainer>
          <TabContainer dir={theme.direction}><MyChallenge/></TabContainer>
        </SwipeableViews>
        <NavLink to="/4">
          <img src="http://image.noelshack.com/fichiers/2018/51/3/1545257524-plus-1.png" alt="Bouton +" className={classes.button} />
        </NavLink>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menu);