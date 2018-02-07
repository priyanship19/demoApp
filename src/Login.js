import React,{Component} from 'react';
import {View,TouchableOpacity,Text,StyleSheet,ImageBackground,Alert} from 'react-native';
import {Input} from './LoginCompnent/index';
import axios from 'axios';

class Login extends Component{

    constructor(props){
        super(props)
    }
    state={email:'abcd@gmail.com',password:'123',error:'',loading:false}
    onButtonClick() {

        axios.post('http://localhost:3000/signin', {
            email: this.state.email,
            password: this.state.password
        })
            .then((response) => {
                console.log(response.data);

                this.props.navigation.navigate('Home')

            })
            .catch((error) => {

                console.log(error);
            });

    }


    render() {
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

                <Input
                    label={'Password:'}
                    secureTextEntry
                    placeholder={'please enter your password'}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                />

                <TouchableOpacity style={{borderRadius: 3,
                    marginTop: '2%',
                    height:'10%',
                    width:'50%',
                    marginLeft:'25%'
                    ,          justifyContent:'center'
                    ,         backgroundColor:'#65C912'}}
                onPress={() => {this.onButtonClick()}}
                >

                    <Text style={{textAlign:'center',
                        fontSize:20,
                        color:'#040604'}}>
                        SIGN IN
                    </Text>

                </TouchableOpacity>
                <View style={{marginTop:'15%'}}>
                <TouchableOpacity style={{borderRadius: 3,
                    marginTop: '-9%',
                    width:'50%',
                    marginLeft:'25%',
                    justifyContent:'center',
                    backgroundColor:'#65C912'}}
                                  onPress={()=>this.props.navigation.navigate('Reg')}
                >

                    <Text style={{textAlign:'center',
                        fontSize:20,
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
        fontSize: 30,
        textAlign: 'center',
        marginLeft:40,

    },
    hotel: {
        textAlign: 'center',
        color:'#65C912',
        fontSize:60,
        paddingTop:'2%',
        marginLeft:'5%'

    },
    detail:{
        justifyContent:'flex-start',
        textAlign:'center',
        fontSize:30,

    },
    backgroundImageStyle:{

        alignSelf:'stretch',
        width:'100%',
        height:'100%'


    }
});

export default Login;