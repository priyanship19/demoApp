import React,{Component} from 'react';
import {Text,View,Button,TouchableOpacity,Image} from 'react-native';
class Screen1 extends Component{
    static navigationOptions=({navigation})=>({
        title: 'Restaurent',
        headerLeft: <View style={{height:'5%',width:'5%'}}>
            <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Image
                    source={require('/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/house.png')}/>
            </TouchableOpacity>
        </View>
    })
    render() {
        return (

            <View>
                <Text>Screen1</Text>

            </View>
        );
    }
};
export default Screen1;