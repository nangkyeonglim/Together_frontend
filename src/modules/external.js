import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as externalAPI from '../lib/api/external';
import * as placeAPI from '../lib/api/place';

const [FIND_PLACE_IMAGE_FROM_EXTERNAL, FIND_PLACE_IMAGE_FROM_EXTERNAL_SUCCESS, FIND_PLACE_IMAGE_FROM_EXTERNAL_FAILURE] = createRequestActionTypes(
    'place/FIND_PLACE_IMAGE_FROM_EXTERNAL'
);
const [GET_ALL_PLACE, GET_ALL_PLACE_SUCCESS, GET_ALL_PLACE_FAILURE] = createRequestActionTypes(
    'place/GET_ALL_PLACE'
);


export const findPlaceImageFromExternal = createAction(FIND_PLACE_IMAGE_FROM_EXTERNAL, data => data);
export const getAllPlace = createAction(GET_ALL_PLACE);


const findPlaceImageFromExternalSaga = createRequestSaga(FIND_PLACE_IMAGE_FROM_EXTERNAL, externalAPI.findPlaceImageFromExternal);
const getAllPlaceSaga = createRequestSaga(GET_ALL_PLACE, placeAPI.getAllPlace);

export function* externalSaga(){
    yield takeLatest(FIND_PLACE_IMAGE_FROM_EXTERNAL, findPlaceImageFromExternalSaga);
    yield takeLatest(GET_ALL_PLACE, getAllPlaceSaga);
}

const  initialState = {
    place: null,
    error: null,
};

const external = handleActions(
{
    [FIND_PLACE_IMAGE_FROM_EXTERNAL_SUCCESS]: (state, { payload: place }) => ({
        ...state,
        place: place,
    }),
    [FIND_PLACE_IMAGE_FROM_EXTERNAL_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error: error,
    }),
},
initialState,
);

export default external;
