import {REGISTER_DATA,LOGIN_DATA} from "./actionConstType";
import Constant from '../ApiCall/apiConst';
import {CallApi} from "../ApiCall/apiCalll";


export const RegisterAction = (fullname,email,password) => {

    return (dispatch,getState) => {

        return CallApi(Constant.BASE_URL + Constant.register , 'post' , {
            fullname:fullname,
            email:email,
            password:password

        },{})
            .then((response) => {

                console.log(Constant.BASE_URL + Constant.register);

                dispatch({

                    type:REGISTER_DATA,
                    payload:response.data,
                    status:response.status
                });

            })
            .catch((error) => {

                console.log(error);
            })

    }


}

export const LoginAction = (data) => {

    return (dispatch,getState) => {
        //console.log(email,password);
        console.log(Constant.BASE_URL + Constant.login);
        //debugger
        return CallApi(Constant.BASE_URL + Constant.login,'post',data,{})

            .then((response) => {
                //debugger
                console.log(Constant.BASE_URL + Constant.login);

                dispatch({

                    type:LOGIN_DATA,
                    payload:response.data,
                    status:response.status
                })
                console.log("REsPONSE" + response.data);

            })

            .catch((err) => {
            console.log("error In Action")
                console.log(err)
            })

    };
}