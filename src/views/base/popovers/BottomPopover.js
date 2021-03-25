import React from "react";
import { CButton, CPopover, CRow, CCol } from "@coreui/react";
import PopoverForm from "../forms/PopupForm";

const BottomPopover = ({ title }) => {
  const placements = ["right"];

  return (
    <CRow>
      {placements.map((placement) => {
        return (
          <CCol md="2" className="py-4 text-center" key={placement}>
            <CPopover
              header={title}
              content={<PopoverForm />}
              placement={placement}
              interactive={true}
              trigger="click"
            >
              <CButton color="primary">{title}</CButton>
            </CPopover>
          </CCol>
        );
      })}
    </CRow>
  );
};

export default BottomPopover;
