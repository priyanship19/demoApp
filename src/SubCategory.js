import React,{Component} from 'react';
import {View,Text,ImageBackground,ActivityIndicator,StyleSheet,Dimensions} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import { SubCategoryAction } from '../Actions/getCategoryAction';

class SubCategory extends Component{




    constructor(props){

        super(props);


    }
    componentDidMount(){

    /*this.setState({loading:true});
    await this.loadData().then((data) =>{

        this.setState({subcategories:data,
            loading:false

        })
    })*/
        const {dispatch} = this.props
        console.log(this.props.navigation.state.params.data._id);
    this.props.onSubCategoryAction(this.props.navigation.state.params.data._id);


    }

    componentWillReceiveProps(nextProps){

        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps,nextState)
    {

        return true;
    }

   /* async loadData(){
      var catid = this.props.navigation.state.params.data._id

       var promise = new Promise((resolve,reject) => {



           setTimeout(() => {

               axios.get('http://localhost:3000/select?id='+catid)
                   .then((response) => {

                   resolve(response.data);
                   })
                   .catch((error) => {

                    console.log(error);

                   })
           },3000);
       })

        return promise;
    }*/
    renderSubCategory(){
        return(
            this.props.subcategorySelect.map((data,key) =>{

                return(
                    <View key={key} style={styles.productBoxStyle}>
                        <ImageBackground source={{uri:data.subcategoryimage}} style={styles.imageStyle}/>

                        <Text style={styles.textStyle}>{data.subcategoryname}</Text>
                    </View>


                );
            })
        )
    }
    render(){
            /*if(this.state.loading)
            {

                return  <ActivityIndicator size={'small'} />
            }*/
        return(

            <View style={styles.productViewStyle}>
                {

                    this.renderSubCategory()
                }
            </View>
        );

    }



}
const styles = StyleSheet.create({


    imageStyle:{

        alignSelf:'stretch',
        height:'110%',
        width:'100%'

    },
    textStyle:{
        fontSize:25,
        textAlign:'center',
        color:'red'
    },
    productBoxStyle:{
        margin:2,
        width:Dimensions.get('window').width/2 -6,
        height:150,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    productViewStyle:{
        flexWrap:'wrap',
        flexDirection:'row',
        flex:1,
        padding:2
    }

});
const mapStateToProps=state=>{
    return {

        subcategorySelect:state.getCategory.subcategorySelect
    }
}

function mapDispatchToProps(dispatch) {

    return{

        onSubCategoryAction : (props) => {

            dispatch(SubCategoryAction(props));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SubCategory);