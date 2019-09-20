import React , {Component} from 'react';
import classes from './OrderSummary.css';
import Aux from '../../../hoc/_aux/_aux';
import Button from '../../UI/Button/Button';
class  OrderSummary extends Component{
    // shouldComponentUpdate(){
    //     console.log('[OrderSummary]shouldComponenetUpdate');
    // }
    willComponentUpdate(){
        console.log('[OrderSummarys]shouldComponenetUpdate');
    }
    render (){
        const ingredientSummary=Object.keys(this.props.ingredients).map(
            (igKey)=> <li key={igKey}><span style={{textTransform : 'capitalize'}}>{igKey} :</span>{this.props.ingredients[igKey]}</li>   
           );
      
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Enjoy your Meal with the following Ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p>Total Price:<strong>{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btntype="Success" clicked={this.props.purchaseContinued}>SUBMIT</Button>
                <Button btntype="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            </Aux>
        );
    }
}



export default OrderSummary;