import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CLabel,
  CSelect,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const PopupForm = ({ title }) => {
  return (
    <div>
      <CCard>
        <CCardHeader>
          <strong>{title}</strong>
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <CFormGroup row>
              <CLabel htmlFor="text-input">Serial#</CLabel>
              <CCol sm="5">
                <CSwitch
                  className="mr-1"
                  color="dark"
                  defaultChecked
                  shape="pill"
                  variant="opposite"
                />
              </CCol>
              <CCol md="3"></CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" />
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel htmlFor="text-input">English Title</CLabel>{" "}
              <CCol sm="5">
                <CSwitch
                  className="mr-1"
                  color="dark"
                  defaultChecked
                  shape="pill"
                  variant="opposite"
                />
              </CCol>
              <CCol md="3"></CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" />
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              {" "}
              <CLabel htmlFor="text-input">Urdu Title</CLabel>
              <CCol sm="5">
                <CSwitch
                  className="mr-1"
                  color="dark"
                  defaultChecked
                  shape="pill"
                  variant="opposite"
                />
              </CCol>
              <CCol md="3"></CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" />
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="5">
                <CLabel htmlFor="select">First Edit</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom name="select" id="select">
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol tag="label" sm="3" className="col-form-label">
                Switch checkboxes
              </CCol>
              <CCol sm="9">
                <CSwitch
                  className="mr-1"
                  color="dark"
                  defaultChecked
                  shape="pill"
                  variant="opposite"
                />
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard>
    </div>
  );
};

export default PopupForm;
