import React from "react";
import NavBarForm from "../base/navbars/NavBarForm";
import { ReactComponent as FilterIcon } from "../../assets/icons/filterlist.svg";

import CIcon from "@coreui/icons-react";
import CombinedAllTable from "../base/tables/CombinedAllTable";
import PopoverForm from "../base/forms/PopupForm";
import LeftCollapse from "../base/collapses/LeftCollapse";
import PrimaryModal from "../notifications/modals/PrimaryModal";

const EditButton = () => <PrimaryModal modalTitle={`Edit`} content={[]} />;

const RawFiles = () => {
  return (
    <div>
      <NavBarForm title={`Search`} />
      <LeftCollapse
        label={"Filter"}
        content={<PopoverForm title={`Filter Items`} />}
      />
      <LeftCollapse
        label={"Add New Record"}
        content={<PopoverForm title={`Add New Record`} />}
      />

      <LeftCollapse
        label={"Add New Column"}
        content={<PopoverForm title={`Add New Column`} />}
      />
      <CombinedAllTable
        data={[
          {
            serialNo: 1,
            titleEnglish: "The Imagery of Saleem Ur Rehman",
            titleUrdu: "سلیم الرحمن کی امیجری",
            firstEdit: "complete",
            modify: {
              render: () => <PrimaryModal modalTitle={`Edit`} content={[]} />,
            },
          },
        ]}
        fields={[
          "serialNo",
          "titleEnglish",
          "titleUrdu",
          "firstEdit",
          "modify",
        ]}
      />
    </div>
  );
};

export default RawFiles;
