import React from "react";
import CombinedAllTable from "../base/tables/CombinedAllTable";

const Published = () => {
  return (
    <div>
      {" "}
      <CombinedAllTable
        data={[
          {
            serialNo: 1,
            englishTitle: "Imagery of Ghalib (1)",
            urduTitle: "غالب کی امیجری",
            status: "public",
            dateOfPublishing: "2021/01/01",
            link: `https://youtu.be/qg5STy4WCjs`,
          },
        ]}
        fields={[
          "serialNo",
          "englishTitle",
          "urduTitle",
          "status",
          "dateOfPublishing",
          "link",
        ]}
      />
    </div>
  );
};

export default Published;
