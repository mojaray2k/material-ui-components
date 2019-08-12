import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});


const Breakpoints = withStyles(styles)(({ classes, xs, sm, md }) => (
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={xs} sm={sm} md={md}>
        <Paper className={classes.paper}>xs={xs} sm={sm} md={md}</Paper>
      </Grid>
      <Grid item xs={xs} sm={sm} md={md}>
        <Paper className={classes.paper}>xs={xs} sm={sm} md={md}</Paper>
      </Grid>
      <Grid item xs={xs} sm={sm} md={md}>
        <Paper className={classes.paper}>xs={xs} sm={sm} md={md}</Paper>
      </Grid>
      <Grid item xs={xs} sm={sm} md={md}>
        <Paper className={classes.paper}>xs={xs} sm={sm} md={md}</Paper>
      </Grid>
    </Grid>
  </div>
));

Breakpoints.defaultProps = {
  xs: 12,
  sm: 6,
  md: 3
}

export default Breakpoints;
