import React,{Component} from 'react';
import {View,TouchableOpacity,Text,StyleSheet,ImageBackground,Alert,AsyncStorage} from 'react-native';
import {Input} from './LoginCompnent/index';
import axios from 'axios';
import { NavigationActions } from 'react-navigation'
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome'
import {LoginAction} from "../Actions/registerAction";
import {connect} from 'react-redux';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

class Login extends Component{

    constructor(props){
        super(props)
       this.state={email:'harnisha@gmail.com',password:'harnisha123',error:'',loading:false}
    }

    onButtonClick() {

        this.props.LoginAction({
            email:this.state.email,
            password:this.state.password
        });

       /* axios.post('http://localhost:3000/signin', {
            email: this.state.email,
            password: this.state.password
        })
            .then((response) => {
                console.log(response.data);

                // this.props.navigation.navigate('Home')
                this.props.navigation.dispatch( NavigationActions.reset(
                    {
                        index: 0,
                        key: null,
                        actions: [
                            NavigationActions.navigate({ routeName:'Home'})
                        ]
                    }))
            })
            .catch((error) => {

                console.log(error);
            });
*/
    }
    componentWillReceiveProps(nextProps){

        var res = nextProps.status;
        console.log("Status" + res);
        if(res == 200){

               // AsyncStorage.setItem('token',nextProps.token);
            this.props.navigation.dispatch(NavigationActions.reset({

                index:0,
                actions :[

                    NavigationActions.navigate({routeName:'Home'})
                ]

            }))
        }
        else
        {

            Alert.alert("Wrong Password And Username ");
        }

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>

                <ImageBackground
                    source={require('/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/hotel.jpg')}
                    style={styles.backgroundImageStyle}
                    blurRadius={2}
                >
                    <View>

                        <Text style={styles.welcome}>
                            WELCOME TO
                        </Text>
                        <Text style={styles.hotel}>
                            HOTEL
                        </Text>
                        <Text style={styles.detail}>
                            Find inspiration and shared great photos
                        </Text>
                    </View>
            <View style={{marginTop:'5%'}}>
                <Input
                    label={'Email:'}
                    placeholder={'please enter your email'}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}

                />
                <Input style={{marginBottom:responsiveHeight(5),paddingTop:50}}
                    label={'Password:'}
                    secureTextEntry
                    placeholder={'please enter your password'}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                />

                {/*<Hideo
                    iconClass={Icon}
                    iconName={'envelope'}
                    iconColor={'white'}
                    iconBackgroundColor={'#f2a59d'}
                    inputStyle={{ color: '#464949' }}
                    iconSize={30}
                />
                <Hideo

                    iconClass={Icon}
                    iconName={'user'}
                    iconColor={'white'}
                    iconBackgroundColor={'#f2a59d'}
                    inputStyle={{ color: '#464949' }}
                />*/}


                <TouchableOpacity style={{borderRadius: 3,
                    marginTop: responsiveHeight(5),
                    height: responsiveHeight(5),
                    width: responsiveWidth(50),
                    marginLeft:'25%',
                    justifyContent:'center',
                    backgroundColor:'#65C912'}}
                onPress={() => {this.onButtonClick()}}
                >

                    <Text style={{textAlign:'center',
                        fontSize:responsiveFontSize(2),
                        color:'#040604'}}>
                        SIGN IN
                    </Text>

                </TouchableOpacity>
                <View style={{marginTop:responsiveHeight(5)}}>
                <TouchableOpacity style={{borderRadius: 3,
                    marginBottom: responsiveHeight(-5),
                    width:responsiveWidth(50),
                    marginLeft:responsiveWidth(25),
                    justifyContent:'center',
                    backgroundColor:'#65C912'}}
                                  onPress={()=>this.props.navigation.navigate('Reg')}
                >

                    <Text style={{textAlign:'center',
                        fontSize:responsiveFontSize(2),
                        color:'#040604'}}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
                </ImageBackground>

</View>

        );
    }

}

const styles = StyleSheet.create({

    welcome: {

        paddingTop:100,
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        marginLeft:40,

    },
    hotel: {
        textAlign: 'center',
        color:'#65C912',
        fontSize:responsiveFontSize(7),
        paddingTop:'2%',
        marginLeft:'5%'

    },
    detail:{
        justifyContent:'flex-start',
        textAlign:'center',
        fontSize:responsiveFontSize(3),

    },
    backgroundImageStyle:{

        alignSelf:'stretch',
        width:responsiveWidth(100),
        height:responsiveHeight(100)


    }
});

const mapStateToProps=state=>{

    console.log(state);
    return {

        status:state.register.status,
        token:state.register.token
    }
};

export default connect(mapStateToProps,{LoginAction})(Login);