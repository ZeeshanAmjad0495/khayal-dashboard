import React from "react";
import { CButton } from "@coreui/react";

const SecondaryButton = (props) => {
  return (
    <div>
      <CButton block variant="outline" color="secondary">
        {props.label} {props.children}
      </CButton>
    </div>
  );
};

export default SecondaryButton;
