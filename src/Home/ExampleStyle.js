import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ACEDFF',
        height: 100,
    },
    tittle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    lista: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#D7D7DA',
        height: 15,
        width: '100%',
    },
    buttons: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 10,
        height: 15,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20    },
    botonPrimary: {
        backgroundColor: '#ACEDFF',
        width: 120,
        height: 30,
        borderRadius: 10
    },
    botonSecondary: {
        backgroundColor: '#ACEDFF',
        width: 120,
        height: 30,
        borderRadius: 10
    },
    spinnerStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    imageArray: {
        width: 45, 
        height: 45, 
        borderRadius: 50, 
        marginLeft: 12
    },
    containerImage: {
        width: '18%'
    },
    textName: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'black',
        marginTop: 13
    },
    textPrice: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'black',
        marginTop: 13
    },
    textBold: {
        fontWeight: 'bold', 
        fontSize: 24, 
        color: 'black'
    },
    textTitleName: {
        fontSize: 18, 
        color: 'black'
    },
    textBirth: {
        fontSize: 14, 
        color: 'black', 
        marginTop: 10
    },
    product: {
        width: '40%' 
    },
    price: {
        width: '35%'
    },
    flecha: {
        width: '20%' 
    },
    textFlecha: {
        color: 'white', 
        marginTop: 13
    },
    textButton: {
        color: 'black', 
        fontWeight: 'bold' , 
        fontSize: 16,
        textAlign: 'center', 
        marginTop: 3
    },
    textBoldDetail: {
        fontWeight: 'bold', 
        fontSize: 24, 
        color: 'black',
        paddingLeft: 15,
        paddingTop: 60
    },
    containerDetail: {
        width: '93%',
        height: '70%',
        backgroundColor: '#ACEDFF',
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    containerButonDetail: {
        marginTop: 30,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
})