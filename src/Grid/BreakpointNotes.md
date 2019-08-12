# Applying Breakpoints

A **breakpoint** is used by **Material-UI** to determine at what point to break the flow of content on the screen and continue it on the next line. Understanding how to apply breakpoints with `Grid` components is fundamental to implementing layouts in **Material-UI** applications.

## How to do it...

Let's say that you have four elements that you want to lay out on the screen so that they're evenly spaced and occupy all available horizontal space. The code for this is as follows:

```js
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

const Breakpoints = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
    </Grid>
  </div>
));

export default Breakpoints;
```

This renders four `Paper` components. The labels indicate the values used for the `xs`, `sm`, and `md` properties. Here's what the result looks like:

!['Grid Image 1'](http://localhost:9009/assets/Grid/images/grid-1.png)

## How it works...

Each of the `breakpoint` properties that you can pass to `Grid` components correspond to screen widths, as follows:

- xs >= 0px
- sm >= 600px
- md >= 960px
- lg >= 1280px
- xl >= 1920px

The screen shown previously had a pixel width of **725**, which means that the **Grid** components used the `sm` **breakpoint**. The value passed to this property was 6. This can be a number from 1 to 12 and defines how many items will fit into the grid. This can be confusing, so it's helpful to think of these numbers in terms of percentages. For example, 6 would be **50%** and, as the preceding screenshot shows, the Grid items take up **50%** of the width.

For example, let's say that you want the width of each `Grid` item to take up **75%** of the screen width when the small breakpoint is active. You could set the sm value to **9 (9/12 = 0.75)**, as follows:

```js
<div className={classes.root}>
  <Grid container spacing={4}>
    <Grid item xs={12} sm={9} md={3}>
      <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
    </Grid>
    <Grid item xs={12} sm={9} md={3}>
      <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
    </Grid>
    <Grid item xs={12} sm={9} md={3}>
      <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
    </Grid>
    <Grid item xs={12} sm={9} md={3}>
      <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
    </Grid>
  </Grid>
</div>
```

Here's the result when the screen width is still at **725** pixels:
!['Grid Image 2'](http://localhost:9009/assets/Grid/images/grid-2.png)
