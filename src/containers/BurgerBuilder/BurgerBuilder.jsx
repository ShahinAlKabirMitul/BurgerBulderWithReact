import React, { Component } from 'react'
import Aux from '../../hoc/aux'
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES={
  salad:0.5,
  cheese:0.4,
  meat:3.0,
  bacon:0.7
}
 class BurgerBuilder extends Component {
  state = {
      ingredients:{
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
      },
      totalPrice:4
  }

  addIngredientHandler =(type) => {
    const oldCount=this.state.ingredients[type];
    const updatedIngredient=oldCount+1;
    const updatedIngredients={...this.state.ingredients};
    updatedIngredients[type]=updatedIngredient;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice= this.state.totalPrice;
    const newPrice= oldPrice+priceAddition;
    this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
  }
  
  removeIngredientHandler =(type) => {
    
  }

  render() {
    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients}/>
        </div>
        <div>
           <BuildControls ingedientAdded={  this.addIngredientHandler}/>
        </div>
      </Aux>
    )
  }
} 

export default BurgerBuilder;
