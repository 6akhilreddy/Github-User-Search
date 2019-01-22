import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function DisplayDetails(props) {
  const { classes ,details } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {details.username}
        </Typography>
        <Typography component="p">
          {details.bio}
        </Typography>
        <Typography component="p">
          <strong>Number of Repositories : </strong> {details.repos}
        </Typography>
        <Typography component="p">
            <strong>Number of Followers : </strong> {details.followers}
        </Typography>
      </Paper>
    </div>
  );
}


export default withStyles(styles)(DisplayDetails);