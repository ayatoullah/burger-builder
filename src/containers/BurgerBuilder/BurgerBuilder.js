import React , { Component } from 'react';
import Aux from '../../hoc/_aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
//import burger from '../../components/Burger/Burger';
import axios from 'axios';
import Spinner from 'spinner';
const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese :0.4,
    meat : 1.3,
    bacon : 0.7

}
class BurgerBuilder extends Component{
    state = {
        ingredients : null,
        totalPrice :4,
        purchasable : false,
        purchasing : false,
        loading :false
    }
    componentDidMount(){
        const axios = require('axios');
        axios.get('https://burger-test-d887c.firebaseio.com/ingredients.json').then(
            response => {
                this.setState({
                    ingredients:response.data
                })
            }
        );
    }
    purchaseCancelHandler = () =>{
        this.setState({purchasing : false });
    }
    purchaseContinueHandler = () =>{
        alert('you continue!!');
    }
    updatePurchasingState =()=>{
        this.setState({purchasing : true});
    }
    updatePurchaseState (ingredients){

     
        const sum = Object.keys(ingredients).map(igKey => {
                return ingredients[igKey];
            }
        ).reduce((sum,el) =>{
                return sum+el
        },0);
        console.log('sum',sum);
        this.setState({purchasable : sum >0});
    }
    addIngredientHandler=(type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredient ={
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients : updatedIngredient,totalPrice:newPrice});
        this.updatePurchaseState(updatedIngredient);
      console.log(this.state.purchasable);

    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredient ={
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ingredients : updatedIngredient,totalPrice:newPrice});
        this.updatePurchaseState(updatedIngredient);
        console.log(this.state.purchasable);
      

    }
    render () {
       const  disabledInfo ={
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        console.log('disabledInfo',disabledInfo);
        let orderSummary=null;
        let burger =  null;
        if(this.state.loading) {
            burger=<Spinner/>;
        }
        
        if(this.state.ingredients) {
            burger =(
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasing={this.updatePurchasingState}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}/>
                </Aux>
            );
            
            orderSummary=(
                <OrderSummary 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}/>
            );
            if(this.state.loading) {
                orderSummary=<Spinner/>;
            }
        }

        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}
export default BurgerBuilder;