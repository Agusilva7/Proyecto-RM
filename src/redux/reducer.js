import { ADD_FAV,REMOVE_FAV } from "./actions"
const initialState={
    myFavorites:[],
    access:false
}

const reducer=(state=initialState,action)=>{
    
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites,action.payload]
            }
        case REMOVE_FAV:
            let array=state.myFavorites.filter(personaje => personaje.id !== parseInt(action.payload))
            return{
                ...state,
                myFavorites:array
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;