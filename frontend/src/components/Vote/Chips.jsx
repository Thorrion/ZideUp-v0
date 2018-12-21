import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import './Chips.scss'


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '5vw',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
    // color: "blue"
  },
  input: {
    margin: theme.spacing.unit,
    width: '90vw',
    // marginLeft: '5vw'
  },
});

class ChipsArray extends React.Component {
  state = {
    chipData: [
      { key: "0", label: 'Call Center' },
      { key: "1", label: 'Réactivité' },
      { key: "2", label: 'Parcours UX' },
      { key: "3", label: 'Garantie' },
      { key: "4", label: 'Informations' },
      { key: "5", label: 'Customisation' },
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
      <div className="VoteChips">
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          
          return (
            <Chip
            key={data.key}
            name={data.key}
            color={this.state[data.key]}
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