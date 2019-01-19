import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Input from '@material-ui/core/Input';


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
    marginLeft: '5vw'
  },
});

class ChipsArray extends React.Component {
  state = {
    chipData: [
      {label: 'Call Center' },
      {label: 'Réactivité' },
      {label: 'Parcours UX' },
      {label: 'Garantie' },
      {label: 'Informations' },
      {label: 'Customisation' },
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

      <Input
        placeholder="Ajoutez vos items séparés par des virgules"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />
      <Paper className={classes.root}>
        {this.state.chipData.map((data,index) => {
          let icon = null;
          
          if (data.label === 'React') {
            icon = <TagFacesIcon />;
          }
          
          return (
            <Chip
            key={index}
            icon={icon}
            label={data.label}
            onDelete={this.handleDelete(data)}
            className={classes.chip}
            />
            );
          })}
      </Paper>
      </div>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);