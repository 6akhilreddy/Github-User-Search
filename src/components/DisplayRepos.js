import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  heading: {
    marginTop:20,
    color:'#fff'
  }
};

export class DisplayRepos extends Component {

  state={
    repositories:this.props.repos
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ repositories: nextProps.repos });  
  }


  render() {
    const {classes}=this.props
    var dataObject=this.state.repositories.map(e=>{
      return (
    
      <Grid item xs={12} sm={6} lg={4} xl={3} key={e.id}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {e.name}
              </Typography>
              <Typography component="p">
                {e.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary"
            onClick={()=>{
              window.open(e.html_url)
            }}>
              Go To Repository
            </Button>
          </CardActions>
        </Card>
      </Grid>
  
      )
    })
    
    return (
      <React.Fragment>
  
      <div className={classes.heading} >
       <h1>Repositories</h1>
      </div>
      <Grid container spacing={24} style={{padding:24}}>
      {dataObject}
      </Grid>
      </React.Fragment>
    )
  }
}


export default withStyles(styles)(DisplayRepos);
