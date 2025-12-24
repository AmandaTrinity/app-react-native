import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const style =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get("window").height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get("window").height/4,
        width: '100%',
        paddingHorizontal: 36
    },
    boxBottom:{
        height: Dimensions.get("window").height/3,
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80
    },
    text: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    titleInput: {
        marginLeft: 5,
        color: theme.Colors.gray,
        marginTop: 20
    },
    boxInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: theme.Colors.lightGray,
        borderColor: theme.Colors.lightGray
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
    },
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.Colors.primary,
        borderRadius: 40,
    },
    textButton: {
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold'
    },
    textBottom:{
        fontSize:16,
        color:theme.Colors.gray
    },
})