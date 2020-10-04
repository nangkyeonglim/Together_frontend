import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/common/Modal';
import { closeModal, openModal } from '../../modules/modal';
import AddGroupModal from '../../components/modal/AddGroupModal';
import { changeAddGroupField, addGroup, editGroup, getGroupByUserId, initializeAddGroupField, initialize, getGroupByGroupId } from '../../modules/group';
import { withRouter } from 'react-router-dom';


const AddGroupModalContainer = ({ match }) => {
    const dispatch = useDispatch();
    const { add_group_modal, error, add_group, response } = useSelector(({ modal, group }) => ({
        add_group_modal: modal.add_group_modal,
        error: group.error,
        add_group: group.add_group,
        response: group.response,
    }));

    const handleCloseModal = () => {
        dispatch(closeModal('add_group_modal'));
    }
    const handleDelete = () => {
        dispatch(closeModal('add_group_modal'));
        dispatch(openModal('group_delete_alert_modal'));
    }

    const handleChange = (e) => {
        if (e.target.name === 'imageUrl'){
            // e.persist();
            e.preventDefault();
            let reader = new FileReader();
            const file = e.target.files[0];
            if(file !== undefined){
                var formData = new FormData();
                formData.append('imageFile', file);
                dispatch(changeAddGroupField({
                    key: 'file',
                    value: formData,
                }))
            }
            reader.onloadend = () => {
                dispatch(changeAddGroupField({
                    key : 'imageUrl',
                    value : reader.result
                }))
                
            }
            reader.readAsDataURL(file); 
        }
        else{
            dispatch(changeAddGroupField({ key: e.target.name, value: e.target.value}));
        }
    }

    const handleSubmit = () => {
        var formData;
        if(add_group.file === ""){
            formData = new FormData();
        }
        else{
            formData = add_group.file;
        }
        formData.append('request', new Blob([JSON.stringify({
            "title": add_group.title,
            "tags": add_group.tags,
            "content":add_group.content,
            "credential": add_group.credential,                 
        })], {
            type: "application/json"
        }));
        if(match.path === "/group/:groupId"){
            const info = {
                roomId : match.params.groupId,
                formData: formData,
            }
            dispatch(editGroup(info));
        }
        else{
            dispatch(addGroup(formData));
        }
    }

    useEffect(()=> {
        if(response.add_group === ""){
            dispatch(closeModal('add_group_modal'));
            dispatch(getGroupByUserId(match.params.userId));
            dispatch(initializeAddGroupField());
            dispatch(initialize());
        }
    },[response, dispatch, match])
    
    useEffect(()=> {
        if(response.edit_group === ""){
            dispatch(closeModal('add_group_modal'));
            dispatch(getGroupByGroupId(match.params.groupId));
            dispatch(initializeAddGroupField());
            dispatch(initialize());
        }
    },[response, dispatch, match])

    return (
        <>
            {
                add_group_modal.visible && 
                <Modal
                    visible={add_group_modal.visible}
                    closable={true}
                    maskClosable={true}
                    onClose={handleCloseModal}>
                    <AddGroupModal 
                        error={error}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleDelete={handleDelete}
                        add_group={add_group}
                        edit={match.path === "/group/:groupId"}
                    />
                </Modal>
            }
        </>
    );
};

export default withRouter(AddGroupModalContainer);