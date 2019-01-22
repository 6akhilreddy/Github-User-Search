import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios'

export class Search extends Component {

    state={
        apiURL:'https://api.github.com/users/',
        searchText:'',
        avatar:'',
        username:'',
        bio:'',
        repos:null,
        followers:null,
        id:null,
        reposURL:''
    }
    
    
    onTextChange = e => {
      const val = e.target.value;
      this.setState({ [e.target.name]: val }, () => {
        if (val === '') {
          this.setState({
            avatar:'', 
            username:'',
            bio:'',
            repos:null,
            followers:null,
            id:null,
            reposURL:''
           },()=>{
              this.props.change(this.state)
           });
           
        } else {
          Axios.get(`${this.state.apiURL}${this.state.searchText}`, {
              params: {
                  client_id:'4221b3232e24bb8e26d8',
                  client_secret:'44ee404fa7b7ac979c0e19060895901866bb6cca'
              }     
          }).then(res => this.setState({ 
            username:res.data.name,
            bio:res.data.bio,
            repos:res.data.public_repos,
            followers:res.data.followers,
            avatar:res.data.avatar_url,
            id:res.data.id,
            reposURL:res.data.repos_url
          
            },()=>{
            this.props.change(this.state)
          }))
            .catch(err => console.log(err));
        }
      });
  };

  render() {
      const {classes}=this.props

    return (
      <div>
      <InputBase
      placeholder="Search…"
      classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
      }}
      name="searchText"
      value={this.state.searchText}
      onChange={this.onTextChange}
      />
      </div>
    )
  }
}
const styles = theme => ({
    root: {
      width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 350,
          },
        },
      },
});
export default withStyles(styles)(Search)
