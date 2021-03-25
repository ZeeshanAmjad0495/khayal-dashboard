import React from "react";
import CombinedAllTable from "../base/tables/CombinedAllTable";

const EditedVideos = () => {
  return (
    <div>
      <CombinedAllTable
        data={[
          {
            serialNo: 1,
            englishTitle: "Imagery of Ghalib (1)",
            urduTitle: "غالب کی امیجری",
            finalEdit: "Complete",
            renderStatus: "Rendered",
          },
        ]}
        fields={[
          "serialNo",
          "englishTitle",
          "urduTitle",
          "finalEdit",
          "renderStatus",
        ]}
      />
    </div>
  );
};

export default EditedVideos;
