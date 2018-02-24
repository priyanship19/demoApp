import {GET_DATA,GET_SUB_DATA} from './actionConstType';
import Constant from '../ApiCall/apiConst';
import {CallApi} from "../ApiCall/apiCalll";

export const CategoryAction = () =>{

        return (dispatch,getState) => {

            return CallApi(Constant.BASE_URL + Constant.select,'get',{})
                .then((response) =>{

                    console.log("response get->" + Constant.BASE_URL + Constant.select);

                    dispatch({

                        type:GET_DATA,
                        payload:response.data
                    });
                    console.log(response);
                })
                .catch((error) => {

                    console.log(error);
                })

        };


};
export const SubCategoryAction = (props) => {


    return (dispatch,getState) =>{

        console.log(props)
        return CallApi(Constant.BASE_URL + Constant.subSelect + "/" + props,'get',{})
            .then((response) => {
                console.log("response get->" + Constant.BASE_URL + Constant.subSelect);
                dispatch({

                    type:GET_SUB_DATA,
                    payload:response.data
                });

            })
            .catch((error) => {

                console.log(error);
            })
    }

}