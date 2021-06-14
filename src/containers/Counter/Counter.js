import React , {Component} from 'react'
import { connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

import * as actionTypes from '../../store/action'


class Counter extends Component{
    // state = {
    //     counter : 0
    // }
   
    
    render(){
        
     return (
         <div>
         <CounterOutput value={this.props.ctr}/>
         <div className="btns">
         <CounterControl label = "Increment" clicked = {this.props.onIncrementCounter}/>
         <CounterControl label = "Decrement" clicked = {this.props.onDecrementCounter}/>
         <CounterControl label = "Add 10" clicked = {this.props.onAddCounter}/>
         <CounterControl label = "Substract 15" clicked = {this.props.onSubstractCounter}/>
         </div>
         <hr/>
         <button className="store" onClick = {() => this.props.onStoreResults(this.props.ctr)}>storedResults</button>
         <ul>
        
         {  this.props.storedResults.map(strResult => {
             return (
         
            <li
            key= {strResult.id}
            onClick = {() => this.props.onDeleteResults(strResult.id)} >
           <span> Previous Value {strResult.value} </span>
            <span class="tooltiptext">Do you want to delete this ?</span>
            </li>
         )  } 
         )}
        
         </ul>
         </div>
     )
    }
}

const mapStateToProps = state => {
    return{
        ctr : state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
   return {
       onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
       onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
       onAddCounter: () => dispatch({type: actionTypes.ADD,val : 10}),
       onSubstractCounter: () => dispatch({type: actionTypes.SUBSTRACT,val : 15}),
       onStoreResults: (result) => dispatch({type:actionTypes.STORE_RESULT , result:result}),
       onDeleteResults: (id) => dispatch({type: actionTypes.DELETE_RESULT,resultElid:id})
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
