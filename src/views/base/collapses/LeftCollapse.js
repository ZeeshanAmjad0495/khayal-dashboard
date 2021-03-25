import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CCollapse,
  CRow,
} from "@coreui/react";

const LeftCollapse = ({ label, content }) => {
  const [collapseMulti, setCollapseMulti] = useState([false, false]);

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice();
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      default:
    }
    setCollapseMulti(newCollapse);
  };
  return (
    <div>
      <p>
        <CButton
          color="primary"
          onClick={() => {
            toggleMulti("left");
          }}
        >
          {label}
        </CButton>{" "}
      </p>
      <CRow>
        <CCol>
          <CCollapse show={collapseMulti[0]}>
            <CCard>
              <CCardBody>{content}</CCardBody>
            </CCard>
          </CCollapse>
        </CCol>
      </CRow>
    </div>
  );
};

export default LeftCollapse;
