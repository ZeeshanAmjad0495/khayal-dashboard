import React from "react";
import {
  CCard,
  CCardBody,
  CNavbar,
  CForm,
  CInput,
  CButton,
} from "@coreui/react";

const NavBarForm = (props) => {
  return (
    <div>
      <CNavbar light color="light">
        <CForm inline>
          <CInput className="mr-sm-2" placeholder="Search" size="sm" />
          <CButton
            color="outline-success"
            className="my-2 my-sm-0"
            type="submit"
          >
            Search
          </CButton>
        </CForm>
      </CNavbar>
    </div>
  );
};

export default NavBarForm;
