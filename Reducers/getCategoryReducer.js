import {GET_DATA,GET_SUB_DATA} from "../Actions/actionConstType";

const INITIAL_STATE = {

    categorySelect : [],
    subcategorySelect :[]
};

export default (state=INITIAL_STATE,action) => {

    switch (action.type){

        case GET_DATA : {

            return{
                ...state,
                categorySelect:action.payload
            }
        }
        case GET_SUB_DATA :{


            return{

                ...state,
                subcategorySelect:action.payload

            }
        }

        default:{

            return state;
        }
    }
}