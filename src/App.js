import React, { Component } from "react";
import AddRecipe from "./Components/AddRecipe";
import CardRecipe from "./Components/CardRecipe/CardRecipe";
import Header from "./Components/Header";
import { Grid, Typography } from '@material-ui/core';
import ListRecipe from "./Components/ListRecipe/ListRecipe";
import RecipeInfo from "./Components/RecipeInfo/RecipeInfo";
import { BrowserRouter, Route, Switch,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GetRecipes } from './Store/Actions'

class App extends Component {
  componentDidMount(){
    this.props.GetRecipes()
  }
  render() {
    let isGrid = 'row';
    if(this.props.location.pathname === '/listrecipe'){
      isGrid = 'column';
    }
    return (
      <BrowserRouter>
      <Header />
        <Grid container>
          <Grid item sm={1}></Grid>
          <Grid direction={isGrid} container item sm={10}>
            <Switch>
              <Route path="/listrecipe" component={ListRecipe}></Route>
              <Route path="/recipeinfo/:id" component={RecipeInfo}></Route>
              <Route path="/create" component={AddRecipe}></Route>
              <Route exact path="/" component={CardRecipe}></Route>
            </Switch>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
        <Typography align="center" className="footer">Made with <span>❤</span> in Sheryians.</Typography>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = ({ 
  GetRecipes
})
export default connect(null,mapDispatchToProps)(withRouter(App));