import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth from './auth';
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    loading,
});

export function* rootSaga() {
    yield all([]);
}
export default rootReducer;
