import {REGISTER_DATA,LOGIN_DATA} from '../Actions/actionConstType';

const INITIAL_STATE = {

    insertRegister:[],
   token:null,
    status:0

}

export default (state=INITIAL_STATE,action) => {
    switch (action.type)
    {
        case REGISTER_DATA :
            //debugger;
            {
                return{
                    ...state,
                    insertRegister:action.payload,
                    status:action.status
                }

        }

        case LOGIN_DATA : {

            return{
                ...state,
                token:action.payload,
                status:action.status
            }
        }
        default:{

            return state
        }


    }

}