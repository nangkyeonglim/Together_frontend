import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/common/Modal';
import { closeModal } from '../../modules/modal';
import AddGroupModal from '../../components/modal/AddGroupModal';
import { changeAddGroupField, addGroup } from '../../modules/group';


const AddGroupModalContainer = () => {
    const dispatch = useDispatch();
    const { add_group_modal, error, add_group } = useSelector(({ modal, group }) => ({
        add_group_modal: modal.add_group_modal,
        error: group.error,
        add_group: group.add_group,
    }));

    const handleCloseModal = () => {
        dispatch(closeModal('add_group_modal'));
    }

    const handleChange = (e) => {
        if (e.target.name === 'imageUrl'){
            // e.persist();
            e.preventDefault();
            let reader = new FileReader();
            const file = e.target.files[0];
            if(file !== undefined){
                var formData = new FormData();
                formData.append('data', file);
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
        var formData = add_group.file;
        formData.append('properties', new Blob([JSON.stringify({
            "title": add_group.title,
            "tags": add_group.tags,
            "content":add_group.content,
            "credential": add_group.credential,                 
        })], {
            type: "application/json"
        }));
        dispatch(addGroup(formData));
    }
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
                        add_group={add_group}
                    />
                </Modal>
            }
        </>
    );
};

export default AddGroupModalContainer;