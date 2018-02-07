import React,{Component} from 'react';
import {View,TouchableOpacity,Image,ImageBackground,StyleSheet,Text,Alert,ActivityIndicator} from 'react-native';
import axios from 'axios';
class Home extends Component{
    static navigationOptions=({navigation})=>({
        title: 'Home',
        headerLeft: <View>
            <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Image
                    source={require('/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/house.png')}/>
            </TouchableOpacity>
        </View>
    })

    async componentWillMount(){
        this.setState({ loading: true });
    await this.loadData().then((data) =>{


        this.setState({categories:data,

            loading:false
        })

    })

    }
async loadData(){

    var promise =  await new Promise((resolve,reject) => {

        setTimeout(() => {
            axios.get('http://localhost:3000/display')
                .then((response) => {
                    // Alert.alert(JSON.stringify(response.data));
                    //this.setState({categories:})
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });


        },5000);


    })
    return promise;
}
    constructor(props){
        super(props);

        this.state={
            categories:[],
            loading:false
        }
    }

    render(){
        if(this.state.loading){

            return <ActivityIndicator size={'small'}/>
        }
        return(

            <View>
                <ImageBackground
                    source={require('/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/mainhotel.jpg')}
                    style={styles.backgroundImageStyle}>

                <View style={{justifyContent:'center'}}>
                    <Text style={styles.textStyle}>
                        LUXURY HOTEL & RESORT
                      /*  {
                            this.state.categories.map((cat)=>{return <Text style={{fontSize:50,color:'red'}}>{cat.categoryname}</Text>})
                        }*/
                    </Text>

                </View>
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({


    backgroundImageStyle:{

        alignSelf:'stretch',
        height:'70%',
        width:'100%'

    },
    textStyle:{
        fontSize:25,
        textAlign:'center',
        color:'#fff'
    }

});

export default Home;