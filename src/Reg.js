import React,{Component} from 'react';
import {Text,View,ImageBackground,TouchableOpacity,StyleSheet,Alert} from 'react-native';
import {Input} from "./LoginCompnent/index";
import axios from 'axios';
import {RegisterAction} from '../Actions/registerAction'
import {connect,bindActionCreators} from 'react-redux';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

class Reg extends Component
{

    constructor(props)
    {

        super(props)
        this.state = {

            fullname:'',
            email:'',
            password:''

        }
    }

    onButtonClick() {


        if(this.state.fullname===''&&this.state.email===''&&this.state.password==='')
        {

            Alert.alert("Please Fill All The Details");
        }
        else
        {

            this.props.RegisterAction(this.state.fullname,this.state.email,this.state.password).then((res) => {

                console.log("Register Data" +  res);
                Alert.alert("Register Your Data");

            }).catch((err) =>{

                console.log("Error Your Register Data",err);
                Alert.alert(err);

            })
        }

      /*  axios.post('http://localhost:3000/task/register', {

            fullname:this.state.fullname,
            email: this.state.email,
            password: this.state.password
        })
            .then((response) => {

                console.log(response.data);
                Alert.alert(response.data);
                if(response.data == 'success') {
                    this.props.navigation.navigate('Login')
                }

            },(err)=>{

            Alert.alert(err);
            })
            .catch((error) => {

                console.log(error);
            });*/

    }

    render()
    {
        return(
            <View>

                <ImageBackground
                    source={require('/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/regback.jpg')}
                    style={styles.backgroundImageStyle}
                    blurRadius={2}
                >
                    <View style={{marginTop:'5%'}}>
                        <Input
                            label={'UseName:'}
                            placeholder={'please enter your name'}
                            value={this.state.fullname}
                            onChangeText={fullname => this.setState({fullname})}

                        />
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
                            marginTop: responsiveHeight(3),
                            height:responsiveHeight(5),
                            width:responsiveWidth(50),
                            marginLeft:'25%',
                            justifyContent:'center',
                            backgroundColor:'#65C912'}}
                                          onPress={() => {this.onButtonClick()}}>

                            <Text style={{textAlign:'center',
                                fontSize:20,
                                color:'#040604'}}>
                                SIGN UP
                            </Text>

                        </TouchableOpacity>

                    </View>
                </ImageBackground>

            </View>
        );
    }
}
const styles = StyleSheet.create({


    backgroundImageStyle:{

        alignSelf:'stretch',
        width:'100%',
        height:'100%'


    }
});
const mapStateToProps=state=>{
    console.log(state);
    return{

        insertRegister:state.register.insertRegister
    }

};

/*function mapDispatchToProps(dispatch){
debugger;
    return
    {

        bindActionCreators({RegisterAction},dispatch)
    }
}*/
export default connect(mapStateToProps, {RegisterAction})(Reg);