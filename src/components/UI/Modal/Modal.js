import React,{Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/_aux/_aux';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component{
    shouldComponenetUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        //console.log('[modal]shouldComponenetUpdate');

        }

    willComponentUpdate(){
        console.log('[modal]willComponenetUpdate');
    }
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{opacity : this.props.show ? 1 :0}}>{this.props.children}</div>
            </Aux>
    )
   
   }}
export default Modal;