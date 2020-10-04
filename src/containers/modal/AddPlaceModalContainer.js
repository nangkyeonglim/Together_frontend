import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/common/Modal';
import { closeModal } from '../../modules/modal';
import AddPlaceModal from '../../components/modal/AddPlaceModal';
import { changeAddPlaceField, addPlaceToGroup, initializePlaceResponse } from '../../modules/place';
import { getGroupByUserId } from '../../modules/group';

const AddPlaceModalContainer = () => {
    const dispatch = useDispatch();
    const { add_place_modal, error, add_place, user_info, my_group, response } = useSelector(({ modal, place, auth, group }) => ({
        add_place_modal: modal.add_place_modal,
        error: place.error,
        add_place: place.add_place,
        user_info: auth.user_info,
        my_group: group.my_group,
        response: place.response,
    }));

    const handleCloseModal = () => {
        dispatch(closeModal('add_place_modal'));
    }

    const handleChange = (e) => {
        console.log(e.target);
        let value;
        if(e.target.name === 'roomId'){
            value =  parseInt(e.target.value);
        }
        else{
            value =  e.target.value;
        }
        dispatch(changeAddPlaceField({key: e.target.name , value: value}));
    }


    useEffect(() => {
        if(user_info){
            dispatch(getGroupByUserId(user_info.userId));
        }
    },[dispatch, user_info])

    const handleSubmit = () => {
        dispatch(addPlaceToGroup(add_place));
    }
    useEffect(() => {
        if(response.add_place === ""){
            dispatch(closeModal('add_place_modal'));
            dispatch(initializePlaceResponse());
        }
    },[dispatch, response])

    return (
          <>
            {
                add_place_modal.visible && 
                <Modal
                    visible={add_place_modal.visible}
                    closable={true}
                    maskClosable={true}
                    onClose={handleCloseModal}>
                    <AddPlaceModal 
                        error={error}
                        add_place={add_place}
                        my_group={my_group}
                        handleChange={handleChange}
                        user_info={user_info}
                        handleSubmit={handleSubmit}
                    />
                </Modal>
            }
        </>
    );
};

export default AddPlaceModalContainer;