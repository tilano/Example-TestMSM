import { createAction } from 'redux-actions';
import {
    HANDLE_LOADING,
    DATA,
    HANDLE_DATA_ERROR,
} from './actionTypes';
import { Request } from './../api/request';
export const handleLoading = createAction(HANDLE_LOADING);
export const data = createAction(DATA);
export const handleDataError = createAction(HANDLE_DATA_ERROR);
export const getDataAction = (params) => async (dispatch, getState) => {
    dispatch(handleLoading());
    return Request.Api({
        method: 'get',
        url: 'api/v1/products'
    }).then((response) => {
        dispatch(data(response));
    }).catch((error) => {
        dispatch(handleDataError(error));
    });
};