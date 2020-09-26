import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { initializeAddGroupField } from '../../modules/group';

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  outline: none;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  outline: none;
  .modal-close{
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
  }
  .modal-close > * {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

function Modal({ className, onClose, maskClosable, closable, visible, children }){
  const dispatch = useDispatch();

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
      dispatch(initializeAddGroupField());
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e);
      dispatch(initializeAddGroupField());
    }
  }
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {closable && <div className="modal-close" onClick={close}><IoMdClose /></div>}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

export default Modal;