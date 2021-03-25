import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";

const PrimaryModal = ({ modalTitle, content }) => {
  const [modal, setModal] = useState(true);
  const [large, setLarge] = useState(false);
  const [small, setSmall] = useState(false);
  const [primary, setPrimary] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [danger, setDanger] = useState(false);
  const [info, setInfo] = useState(false);

  return (
    <CCardBody>
      <CButton
        color="primary"
        onClick={() => setPrimary(!primary)}
        className="mr-1"
      >
        {modalTitle}
      </CButton>

      <CModal
        show={primary}
        onClose={() => setPrimary(!primary)}
        color="primary"
      >
        <CModalHeader closeButton>
          <CModalTitle>{modalTitle}</CModalTitle>
        </CModalHeader>
        <CModalBody>{content}</CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setPrimary(!primary)}>
            Save
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setPrimary(!primary)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </CCardBody>
  );
};

export default PrimaryModal;
