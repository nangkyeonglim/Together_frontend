import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as externalAPI from '../lib/api/external';


const [FIND_PLACE_IMAGE, FIND_PLACE_IMAGE_SUCCESS, FIND_PLACE_IMAGE_FAILURE] = createRequestActionTypes(
    'auth/FIND_PLACE_IMAGE'
);

export const findPlaceImage = createAction(FIND_PLACE_IMAGE, data => data);

const findPlaceImageSaga = createRequestSaga(FIND_PLACE_IMAGE, externalAPI.findPlaceImage);

export function* placeSaga(){
    yield takeLatest(FIND_PLACE_IMAGE, findPlaceImageSaga);
}

const  initialState = {
    place: null,
    error: null,
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
},
initialState,
);

export default place;
