import React, { useState } from "react";

import {
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";

import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { theme } from "../../global/themes";
import MaterialIcons from "@react-native-vector-icons/material-icons";

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const  [loading,setLoading] = useState(false)

    async function getLogin(){
        try {
            setLoading(true);

            if(!email || !password) {
                setLoading(false);
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }

            setTimeout(() => {
                Alert.alert('Logado com sucesso')
                setLoading(false)
            }, 2000)

        } catch(error) {
            console.log(error)
            setLoading(false);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                source={Logo}
                style={style.logo}
                resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de Email:</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={(e)=>setEmail(e)}
                        keyboardType="email-address"
                        autoCapitalize="none" // Impede capitalização automática do email
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={theme.Colors.gray}
                    />
                </View>

                <Text style={style.titleInput}>Senha:</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={password}
                        onChangeText={(e)=>setPassword(e)}
                        secureTextEntry={true} // Esconde a senha
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={theme.Colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {
                        loading? 
                            <ActivityIndicator color={'#FFFF'} size={"small"}/>
                        : 
                            <Text
                                style={style.textButton}
                            >Entrar</Text>

                    }

                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color: theme.Colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}