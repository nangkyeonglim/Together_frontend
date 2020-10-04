import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/common/Modal';
import GroupDeleteAlertModal from '../../components/modal/GroupDeleteAlertModal';
import { closeModal } from '../../modules/modal';
import { deleteGroup, initialize } from '../../modules/group';
import {withRouter} from 'react-router-dom';

const GroupDeleteAlertModalContainer = ({ history }) => {
    const dispatch = useDispatch();
      const { group_delete_alert_modal, current_group, response } = useSelector(({ modal, group }) => ({
        group_delete_alert_modal: modal.group_delete_alert_modal,
        current_group: group.current_group,
        response: group.response,
    }));

    const handleCloseModal = () => {
        dispatch(closeModal('group_delete_alert_modal'));
    }

    const handleDelete = () => {
        dispatch(deleteGroup(current_group.id));
        dispatch(closeModal('group_delete_alert_modal'));
        
    }

    useEffect(()=> {
        if(response.delete_group === ""){
            dispatch(initialize());
            history.push('/');
        }
    },[response, dispatch, history]);

    return (
        <>
            {
                group_delete_alert_modal.visible && 
                <Modal
                    visible={group_delete_alert_modal.visible}
                    closable={true}
                    maskClosable={true}
                    onClose={handleCloseModal}>
                    <GroupDeleteAlertModal 
                        handleDelete={handleDelete}
                    />
                </Modal>
            }
        </>
    );
};

export default withRouter(GroupDeleteAlertModalContainer);