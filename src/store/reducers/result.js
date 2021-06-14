import * as actionTypes from '../action'

const initialState = {
    
    results : []
}

const reducer = (state = initialState,action) => {
    console.log(state);
    
    switch(action.type) {
      
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results:  state.results.concat({id: new Date() , value: action.result})
            }
        case actionTypes.DELETE_RESULT:
           const updatedArray = state.results.filter((result) => result.id !== action.resultElid)
           return{
               ...state,
               results: updatedArray
           }
    }
   return state;
};


export default reducer;