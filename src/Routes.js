import React, { Component } from 'react';
import { View } from 'react-native';
import Example from './Home/Example';

//------ aqui se agregaria la parte de las rutas de la apps
const Master = () => (
    <View style={{ width: '100%', height: '100%' }}>
        <Example />
    </View>
);
const Routes = () => {
    return (
        <Master/>
    );
}
export default Routes;