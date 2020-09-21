import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/common/Modal';
import { closeModal } from '../../modules/modal';
import LoginModal from '../../components/modal/LoginModal';


const LoginModalContainer = () => {
    const dispatch = useDispatch();
    const { login_modal, sign_up_error } = useSelector(({ modal, auth }) => ({
        login_modal: modal.login_modal,
        sign_up_error: auth.sign_up_error,
    }));

    const handleCloseModal = () => {
        dispatch(closeModal('login_modal'));
    }
    

    return (
        <>
            {
                login_modal.visible && 
                <Modal
                    visible={login_modal.visible}
                    closable={true}
                    maskClosable={true}
                    onClose={handleCloseModal}>
                    <LoginModal 
                        sign_up_error={sign_up_error}
                    />
                </Modal>
            }
        </>
    );
};

export default LoginModalContainer;