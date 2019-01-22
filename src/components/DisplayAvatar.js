import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
    bigAvatar: {
      margin: 10,
      width: 160,
      height: 160,
    },
};

function DisplayAvtar(props) {
    const {classes,image } =props
  return (
    <div>
        <Grid container justify="center" alignItems="center">
            <Avatar alt="image" src={image} className={classes.bigAvatar} />
        </Grid>
    </div>
  )
}
export default withStyles(styles)(DisplayAvtar);