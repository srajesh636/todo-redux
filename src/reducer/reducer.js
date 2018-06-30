

 const reducer=(state=[],action)=>{

  switch (action.type){
      case "ADD": return state.concat([action.payload])
                  break;
      case "DELETE":return state.filter((store)=>store.id !== action.id)
                    break;
      case "EDIT":return state.map((store)=> store.id === action.payload ? {...store,editing:!store.editing}:store )
                  break;
      case 'UPDATE':
                return state.map((store)=>{
                  if(store.id === action.id) {
                    return {
                       ...store,
                       keyword:action.data.newMessage,

                       editing: !store.editing
                    }
                  } else return store;
                })
      default : return state;
  }



}
export default reducer;
