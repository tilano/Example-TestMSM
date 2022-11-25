import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles }  from './ExampleStyle';
import { getDataAction } from './../actions/getData';
const Example = () => {

    const [view, setView] = useState(0);
    const [detail, setDetail] = useState({});
    const dispatch = useDispatch()
    const dataExample = useSelector(state => state.dataReducer)
    useEffect(() => {
        dispatch(getDataAction())
    }, []);
    const changeView = (item, value) => {
        setDetail(item)
        setView(value)
    }
    const ViewDetail = () => {
        return(
        <View >
            <Text style={styles.textBoldDetail}>{detail.product}</Text>
            <View style={styles.containerDetail}>
                <Text style={styles.textBoldDetail}>Ganaste</Text>
                <Text style={styles.textBoldDetail}>{detail.price}</Text>
            </View>
            <View style={styles.containerButonDetail}>
                <TouchableOpacity  onPress={()=> changeView({}, 0)} style={styles.botonPrimary}><Text style={styles.textButton}>Regresar</Text></TouchableOpacity>
            </View>
        </View>
        )
    }
    if (dataExample.loading) {
        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        view === 0 ?
        <View style={styles.tittle}>
            <View style={styles.container}>
                <Text style={styles.textBold}>Bienvenido</Text>
                <Text style={styles.textTitleName}>Martín Sánchez</Text>
                <Text style={styles.textBirth}>Cumpleaños 28 de Octubre</Text>
            </View>
            <Text style={styles.textBold}>Tus movimientos:</Text>

            {
               dataExample.data.length > 0 && dataExample.data.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.lista} onPress={()=> changeView(item, 1)}>
                            
                            <View style={styles.containerImage}>
                                <Image
                                    style={styles.imageArray}
                                    source={{ uri: item.image }}
                                />
                            </View>
                            <View style={styles.product}><Text style={styles.textName}>{item.product}</Text></View>
                            <View style={styles.price}><Text style={styles.textPrice}> ${item.price} </Text></View>
                            <View style={styles.flecha}><Text style={styles.textFlecha}> > </Text></View>
                        </TouchableOpacity>
                    )
                })
            }
            <View style={styles.buttons}>
                <View style={styles.botonPrimary}><Text style={styles.textButton}>Canjeados</Text></View>
                <View style={styles.botonSecondary}><Text style={styles.textButton}>Ganados</Text></View>
            </View>
        </View> : 
        ViewDetail()
    )
};

export default Example;