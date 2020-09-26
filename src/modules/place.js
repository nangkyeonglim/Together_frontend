import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as externalAPI from '../lib/api/external';
import * as placeAPI from '../lib/api/place';

const [FIND_PLACE_IMAGE, FIND_PLACE_IMAGE_SUCCESS, FIND_PLACE_IMAGE_FAILURE] = createRequestActionTypes(
    'auth/FIND_PLACE_IMAGE'
);
const [GET_ALL_PLACE, GET_ALL_PLACE_SUCCESS, GET_ALL_PLACE_FAILURE] = createRequestActionTypes(
    'place/GET_ALL_PLACE'
);


export const findPlaceImage = createAction(FIND_PLACE_IMAGE, data => data);
export const getAllPlace = createAction(GET_ALL_PLACE);


const findPlaceImageSaga = createRequestSaga(FIND_PLACE_IMAGE, externalAPI.findPlaceImage);
const getAllPlaceSaga = createRequestSaga(GET_ALL_PLACE, placeAPI.getAllPlace);

export function* placeSaga(){
    yield takeLatest(FIND_PLACE_IMAGE, findPlaceImageSaga);
    yield takeLatest(GET_ALL_PLACE, getAllPlaceSaga);
}

const  initialState = {
    place: null,
    error: null,
    place_by_group: null,
};

const place = handleActions(
{
    [FIND_PLACE_IMAGE_SUCCESS]: (state, { payload: place }) => ({
        ...state,
        place: place,
    }),
    [FIND_PLACE_IMAGE_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
    [GET_ALL_PLACE_SUCCESS]: (state, { payload: place_by_group }) => ({
        ...state,
        place_by_group: place_by_group,
    }),
    [GET_ALL_PLACE_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error.response.data,
    }),
},
initialState,
);

export default place;
