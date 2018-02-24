import React from 'react';
import {Text,View,TextInput} from 'react-native';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';


const Input = ({label,palceholder,onChangeText,value,secureTextEntry}) => {

    return (
        <View style={{height:responsiveHeight(10),marginLeft:responsiveWidth(5)}}>
            <Text style={Styles.textStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    palceholder={palceholder}
                    onChangeText={onChangeText}
                    value={value}
                    style={Styles.inputStyle}></TextInput>
        </View>

    );


};


const Styles = {
    inputStyle:{
        fontSize:responsiveFontSize(3),
        justifyContent:'center',
        color:'#fff',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:12,
        flex:1,
        width:responsiveWidth(90)

    },
    textStyle:{

        color:'#fff',
        fontSize:responsiveFontSize(3),
        flex:1,
        height:responsiveHeight(5)

    }

};
export {Input};