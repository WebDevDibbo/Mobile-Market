import { BOOK_NOW } from "../actionTypes/actionTypes";

    const initialState = {
        mobileName:'',
        buyersName: '',
        email: '',
        phone : '',
        location : ''
    };
    export const productReducer = (state = initialState,action) => {
      switch(action.type){
        case BOOK_NOW:
            return{
                ...state,
                [action.payload.name] : action.payload.value,
            }

        default:return state
      }
    }