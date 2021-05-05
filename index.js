const redux = require('redux')

//state
const initState={
    num:0
}
//reducer
const reducer=(state=initState,action) => {
    if(action.type ==='INC_NUM'){
        return {...state,
            num:state.num+1}
    } 
  if(action.type==='ADD_NUM'){
    return {...state,
        num:state.num+action.value}
  }
  return state
}
//store
const store=redux.createStore(reducer)


//subscribe
store.subscribe(()=>{
    console.log('subscrbe',store.getState())
})
//Dispatching Action

store.dispatch({
    type:'INC_NUM'
})
store.dispatch({
    type:'ADD_NUM',
    value:35
    
})
