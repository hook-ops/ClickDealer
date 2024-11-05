import React from 'react';
import { Modal } from 'antd';

const OfferDetailsModal = ({ offer, onClose }) => {
  return (
    <Modal
      title="Offer Details"
      visible={!!offer}
      onCancel={onClose}
      footer={null}
    >
      <p><strong>ID:</strong> {offer.id}</p>
      <p><strong>Name:</strong> {offer.name}</p>
      <p><strong>Payout:</strong> {offer.payout}</p>
      <p><strong>Format:</strong> {offer.format}</p>
      <p><strong>Country:</strong> {offer.country}</p>
    </Modal>
  );
};

export default OfferDetailsModal;
