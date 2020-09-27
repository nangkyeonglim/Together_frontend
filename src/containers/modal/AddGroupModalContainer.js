import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/common/Modal';
import { closeModal } from '../../modules/modal';
import AddGroupModal from '../../components/modal/AddGroupModal';
import { changeAddGroupField, addGroup, setEditGroupField, editGroup } from '../../modules/group';
import { withRouter } from 'react-router-dom';


const AddGroupModalContainer = ({ match }) => {
    const dispatch = useDispatch();
    const { add_group_modal, error, add_group, current_group } = useSelector(({ modal, group }) => ({
        add_group_modal: modal.add_group_modal,
        error: group.error,
        add_group: group.add_group,
        current_group: group.current_group,
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

    useEffect(() => {
        if(current_group && match.path === "/group/:groupId"){
            const group = {
                title: current_group.title,
                content: current_group.content,
                imageUrl: current_group.imageUrl,
                tags: current_group.tags,
            }
            dispatch(setEditGroupField(group));
        }
    },[match, dispatch, current_group]);

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
                        edit={match.path === "/group/:groupId"}
                    />
                </Modal>
            }
        </>
    );
};

export default withRouter(AddGroupModalContainer);