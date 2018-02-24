import React,{Component} from 'react';
import {Text,View,Button,TouchableOpacity,Image,ActivityIndicator,StyleSheet,Alert,ImageBackground,Dimensions} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import { CategoryAction } from '../Actions/getCategoryAction';
class Screen1 extends React.Component{
    static navigationOptions=({navigation})=>({
        title: 'Restaurent',
        headerLeft: <View style={{height:'5%',width:'5%'}}>
            <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Image
                    source={require('/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/house.png')}/>
            </TouchableOpacity>
        </View>
    })

   constructor(props){

        super(props);


   }
     componentDidMount() {

       /* this.setState({loading: true});
        await this.loadData().then((data) =>{
            this.setState({categories:data,

                loading:false
            })

        })*/
        const {dispatch} = this.props
        this.props.onCategoryAction();
    }
    componentWillReceiveProps(nextProps){

       console.log(nextProps);
    }
    shouldComponentUpdate(nextProps,nextState)
    {

        return true;
    }

/*async loadData() {
    var promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            axios.get('http://localhost:3000/display')
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
renderCategory()
{

    return(


        this.props.categorySelect.map((data,key) => {
            //  Alert.alert(data.categoryimage);
            return(
                <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('SubCategory',{data})}>
                <View style={styles.productBoxStyle}>
                    <ImageBackground source={{uri:data.categoryimage}} style={styles.imageStyle}/>

                    <Text style={styles.textStyle}>{data.categoryname}</Text>
                </View>
                </TouchableOpacity>

            );
        })

    )
}
    render() {


       /* if(this.state.loading)
        {

            return <ActivityIndicator size={'small'}></ActivityIndicator>
        }*/
        return (

            <View style={styles.productViewStyle}>


                    {
                        this.renderCategory()
                    }

            </View>
        );
    }
};

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

        categorySelect:state.getCategory.categorySelect
    }
}

function mapDispatchToProps(dispatch) {

    return{

        onCategoryAction : () => {

            dispatch(CategoryAction());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Screen1);