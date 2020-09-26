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
            console.log('hi');
            console.log(file);
            reader.onloadend = () => {
                dispatch(changeAddGroupField({
                    key : 'imageUrl',
                    value : reader.result
                }))
                dispatch(changeAddGroupField({
                    key: 'file',
                    value: file,
                }))
            }
            reader.readAsDataURL(file); 
        }
        else{
            dispatch(changeAddGroupField({ key: e.target.name, value: e.target.value}));
        }
    }

    const handleSubmit = () => {
        dispatch(addGroup(add_group));
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