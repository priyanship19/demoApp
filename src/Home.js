import React,{Component} from 'react';
import {View,TouchableOpacity,Image,ImageBackground,StyleSheet,Text,Alert,ActivityIndicator,TextInput} from 'react-native';
import axios from 'axios';
import ImageSlider from './LoginCompnent/Slider';
//import DrawerExample from '../src/LoginCompnent/Drawer';
import { Akira } from 'react-native-textinput-effects';
class Home extends Component{
    static navigationOptions=({navigation})=>({
        title: 'Home',
        headerLeft:<View style={{height:'5%',width:'5%'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Image
                    source={require('/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/house.png')}/>
            </TouchableOpacity>
        </View>
    })

  /*  async componentWillMount(){
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


        },3000);


    })
    return promise;
}
    constructor(props){
        super(props);

        this.state={
            categories:[],
            loading:false
        }
    }*/

    render(){
      /*  if(this.state.loading){

            return <ActivityIndicator size={'small'}/>
        }*/
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                {/*<DrawerExample/>*/}

                <View style = {styles.backgroundContainer}>
                    <ImageSlider resizeMode='cover' style={styles.backdrop}/>

                </View>
                <View style={[styles.overlay, { height:'30%',right:'-2%'}]}>
                    <View style={{justifyContent:'center'}}>
                    <Akira
                        label={'First Name'}
                        borderColor={'#ff3333'}
                        labelStyle={{ color: '#0d0d0d' }}
                        fontColor={'#000000'}
                        opacity={0.9}
                        width={5}
                        fontStyle={'italic'}
                    />
                    </View>
                </View>
            </View>
        /*    <View>
                <ImageBackground
                    source={require('/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/mainhotel.jpg')}
                    style={styles.backgroundImageStyle}>

                <View style={{justifyContent:'center'}}>
                    <Text style={styles.textStyle}>
                        LUXURY HOTEL & RESORT
                        {
                            this.state.categories.map((cat) => {
                                return <Text style={{fontSize: 50, color: 'red'}}>{cat.categoryname}</Text>
                            })
                        }
                    </Text>

                </View>
                </ImageBackground>
            </View>*/
        );
    }

}

const styles = StyleSheet.create({


   /* backgroundImageStyle:{

        alignSelf:'stretch',
        height:'70%',
        width:'100%'

    },
    textStyle:{
        fontSize:25,
        textAlign:'center',
        color:'#fff'
    },*/
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: '50%',
        left: 0,
        right: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    overlay: {
        flex:1,
        position: 'absolute',
        left: '3%',
        top: '28%',
        opacity: 0.4,
        backgroundColor: '#FFFFFF',
        width:'94%'
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 160,
        height: 52
    },
    backdrop: {
        flex:1,
        flexDirection: 'column'
    },
    headline: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        color: 'black'
    },
    inputStyle:{
      borderColor:'#ff3333',
        borderRadius:0.5

    }

});

export default Home;