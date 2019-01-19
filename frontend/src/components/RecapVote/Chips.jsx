import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Input from '@material-ui/core/Input';
import { NavLink } from 'react-router-dom'


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  input: {
    margin: theme.spacing.unit,
    width: '90vw',
    // marginLeft: '5vw'
  },
  title: {
    backgroundColor: "#e8e8e8",
    margin: "2vw 0",
    padding: "2vw 5vw",
    width: "100vw"
  },
});

class ChipsArray extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Call Center', members: 45, idea: 20},
      { key: 1, label: 'Réactivité', members: 7, idea: 8 },
      { key: 2, label: 'Parcours UX', members: 25, idea: 15 },
      { key: 3, label: 'Garantie', members: 5, idea: 6 },
      { key: 4, label: 'Informations', members: 15, idea: 8 },
      { key: 5, label: 'Customisation', members: 3, idea: 4 },
    ],
  };

  handleDelete = data => () => {
    if (data.label === 'React') {
      alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
      return;
    }

    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Paper className={classes.root}>
        {this.state.chipData.map((data, index) => {
          let icon = null;
          
          if (data.label === 'React') {
            icon = <TagFacesIcon />;
          }
          
          return (
            <div key={index}>
              <NavLink to={`/8/${this.props.index}`}>
              <Chip
              key={data.key}
              icon={icon}
              label={data.label}
              // onDelete={this.handleDelete(data)}
              className={classes.chip}
              />
              <i className="fas fa-thumbs-up"></i> {data.members} <i className="fas fa-lightbulb"></i> {data.idea}
              </NavLink>
            </div>
            );
          })}
      </Paper>

      <p className={classes.title}>Ajouter des items</p>

      <Input
        placeholder="Ajoutez vos items séparés par des virgules"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />
      </div>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);