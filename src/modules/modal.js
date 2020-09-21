import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const OPEN_MODAL = 'modal/OPEN_MODAL';
const CLOSE_MODAL = 'modal/CLOSE_MODAL';
const CHANGE_VISIBLE = 'modal/CHANGE_VISIBLE';
const INITIALIZE_VISIBLE = 'modal/INITIALIZE_VISIBLE';

export const openModal = createAction(OPEN_MODAL, type => type);
export const closeModal = createAction(CLOSE_MODAL, type => type);
export const initializeVisible = createAction(INITIALIZE_VISIBLE, ({ type, value }) => ({
    type,
    value,
}));
export const changeVisible = createAction(CHANGE_VISIBLE);

const initialState = {
    login_modal: {
        visible: false,
    },
};

const modal  = handleActions(
{
    [OPEN_MODAL]: (state, { payload: type })  => 
        produce(state, draft => {
            draft[type].visible = true;
    }),    
    [CLOSE_MODAL]: (state, { payload: type })  => 
        produce(state, draft => {
            draft[type].visible = false;
    }),    
    [INITIALIZE_VISIBLE]: (state, { payload: { type, value }})  => 
        produce(state, draft => {
            draft[type].visible = value;
    }),   
},
initialState,
);

export default modal;

