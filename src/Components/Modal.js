import React from 'react';
import { Modal } from 'react-responsive-modal';

import './Modal.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose} center animationDuration={500}>
        
      {children}
    </Modal>
  );
};

export default CustomModal;