import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input';
import { AddChipsAction } from '../../stores/actions/chipsAction'
import { RemoveChipsAction } from '../../stores/actions/chipsAction'
import { RemoveAllChipsAction } from '../../stores/actions/chipsAction'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Close from './pictures/delete-button.png'


const styles = theme => ({
  container: {
  },
  root: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginTop: "2em",
    margin: "0 5vw"
  },
  input: {
    margin: theme.spacing.unit,
    width: '78vw',
    marginLeft: "5vw",

  },
  title: {
    backgroundColor: "#e8e8e8",
    margin: "2vw 0",
    padding: "2vw 5vw",
    width: "100vw"
  },
  button: {
    color: "#039ce0",
    fontSize: "10vw",
    position: "absolute",
    right: "5vw",
    marginTop: "-13vw"
  },
  close: {
    width: "5vw",
    position: 'absolute',
    right: "8vw",
  }
});

class ChipsArray extends React.Component {
  state = {
    name: ""
  }

  componentDidMount = () => {
    this.props.RemoveAllChipsAction()
  }

  addChips = () => {
    let id = this.props.chips.list.length + 1
    if(this.state.chips !== ""){
      this.props.AddChipsAction({
        id : id,
        name : this.state.name,
      })
      this.setState({name: ""})
    } else {
      alert("Veuillez saisir votre item a ajouter.")
    }
  }

  handleDelete = data => () => {
    const chipData = [...this.props.chips.list];
    const chipToDelete = chipData.indexOf(data);
    this.props.RemoveChipsAction(chipToDelete)
  };


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>

      <p className={classes.title}>Principales catégories proposées</p>

      <Input
        placeholder="Ajoutez vos items"
        className={classes.input}
        value={this.state.name}
        onChange={(e) => this.setState({name: e.target.value})}
      />

      <div className={classes.button} onClick={this.addChips}><i class="far fa-plus-square"></i></div>
      
      { this.props.chips &&
        this.props.chips.list.map((chip, index) => {
          return(
            <Paper className={classes.root} elevation={1} key={chip.id}>
            <div onClick={this.handleDelete}>
              <img src={Close} alt="Close" className={classes.close}/>
            </div>
              <ListItem>
                <ListItemText primary={chip.name}/>
              </ListItem>
            </Paper>
          )
        })
      }
      </div>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  chips: state.chips
})

const mapDispatchToProps = {
  AddChipsAction,
  RemoveChipsAction,
  RemoveAllChipsAction,
}



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ChipsArray));