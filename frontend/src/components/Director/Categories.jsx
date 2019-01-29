import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input';
import { AddCategoriesAction } from '../../stores/actions/categoriesAction'
import { RemoveCategoriesAction } from '../../stores/actions/categoriesAction'
import { RemoveAllCategoriesAction } from '../../stores/actions/categoriesAction'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Close from '../pictures/delete-button.png'

const styles = theme => ({
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
    zIndex: 100
  }
});

class Categories extends React.Component {
  state = {
    name: ""
  }

  componentDidMount = () => {
    this.props.RemoveAllCategoriesAction()
  }

  addCategory = () => {
    let id = this.props.categories.list.length + 1
    if(this.state.categories !== ""){
      this.props.AddCategoriesAction({
        id : id,
        name : this.state.name,
      })
      this.setState({name: ""})
    } else {
      alert("Veuillez saisir votre catégorie à ajouter.")
    }
  }

  removeCategory = (id) => {
    if(window.confirm('Voulez-vous supprimer la catégorie ?')){
      this.props.RemoveCategoriesAction(id)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>

      <p className={classes.title}>Principales catégories proposées</p>

      <Input
        placeholder="Ajoutez vos items"
        className={classes.input}
        value={this.state.name}
        onChange={(e) => this.setState({name: e.target.value})}
      />

      <div className={classes.button} onClick={this.addCategory}><i class="far fa-plus-square"></i></div>
      
      { this.props.categories &&
        this.props.categories.list.map((category, index) => {
          return(
            <Paper className={classes.root} elevation={1} key={category.id}>
            <div onClick={() => this.removeCategory(index)}>
              <img src={Close} alt="Close" className={classes.close}/>
            </div>
              <ListItem>
                <ListItemText primary={category.name}/>
              </ListItem>
            </Paper>
          )
        })
      }
      </div>
    );
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories
})

const mapDispatchToProps = {
  AddCategoriesAction,
  RemoveCategoriesAction,
  RemoveAllCategoriesAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Categories));