import React from "react";
import CombinedAllTable from "../base/tables/CombinedAllTable";

const RenderedOrUploaded = () => {
  return (
    <div>
      {" "}
      <CombinedAllTable
        data={[
          {
            serialNo: 1,
            englishTitle: "Imagery of Ghalib (1)",
            urduTitle: "غالب کی امیجری",
            renderStatus: "Rendered",
            uploadStatus: "Uploaded",
            dateOfUpload: "2020/01/01",
          },
        ]}
        fields={[
          "serialNo",
          "englishTitle",
          "urduTitle",
          "renderStatus",
          "uploadStatus",
          "dateOfUpload",
        ]}
      />
    </div>
  );
};

export default RenderedOrUploaded;
