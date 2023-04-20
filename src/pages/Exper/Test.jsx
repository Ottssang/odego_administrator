import React from "react";
import Aside from "@Components/Panel/Aside";
import Display from "@Components/Panel/Display";
// import Table from "@Components/Panel/Table";

import TableDemo from "@Components/Panel/Table2";
import PagingDemo from "@Components/Panel/Table3";

const TestPage = () => {
  // FIXME: must be Implement with Redux
  // TODO: Impliment pagination
  const data = [
    {
      studentId: "2201013",
      classId: "2-wdj",
      studentContact: "010-1234-5678",
      studentName: "강주원",
    },
    {
      studentId: "2201014",
      classId: "2-wdj",
      studentContact: "010-4567-8901",
      studentName: "김유민",
    },
    {
      studentId: "2201015",
      classId: "2-wdj",
      studentContact: "010-2234-7789",
      studentName: "이주현",
    },
    {
      studentId: "2201392",
      classId: "2-wdj",
      studentContact: "010-7776-6665",
      studentName: "이재일",
    },
    {
      studentId: "2201393",
      classId: "2-wdj",
      studentContact: "010-8832-1234",
      studentName: "이현민",
    },
  ];
  return (
    <>
      <Aside />
      <Display>
        <Table type="student" data={data} />
      </Display>
    </>
  );
};

export default TestPage;
