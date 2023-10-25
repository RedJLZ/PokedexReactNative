import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View, Platform, StyleProp, ViewStyle } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';


interface Props{
    onDebounce: (value:string)=>void;
    style?: StyleProp<ViewStyle>
}
 
export const SearchInput = ({style,onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('');
    const deboncedValue = useDebouncedValue(textValue);
    useEffect(() => {
        onDebounce(deboncedValue);
    }, [deboncedValue])
    
    return (
        <View style={{...styles.container, ...style as any}}>
            <View style={{...styles.textBackground}}>
                <TextInput
                    placeholder='Buscar pokémon'
                    style={{...styles.textInput, 
                        top:(Platform.OS==='ios'? 0 : 3)
                    }}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={setTextValue}
                />
                <Icon 
                    name='search-outline'
                    color='grey'
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    textBackground:{
        backgroundColor:'#F3F1F3',
        borderRadius:50,
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput:{
        flex:1,
        fontSize:18
    }
});