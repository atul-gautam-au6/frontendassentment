import { CDataTable } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "src/action/GetUser";

const UserTable = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  // const {loading,userData,subError} = useSelector(state=>state.userList)
// console.log(state,userData)
  // useEffect(() => {
  //   document.title = "User Management";
  //   dispatch(getUser())
  //   setState(userData)
  // }, [dispatch]);

  const fields = [
    { key: "Full Name", _style: { width: "10%" } },
    { key: "Email", _style: { width: "10%" } },
    { key: "Country", _style: { width: "10%" } },
    { key: "Date of birth", _style: { width: "10%" } ,filter: false,},

    // {
    //   key: "show_details",
    //   label: "",
    //   _style: { width: "1%" },
    //   sorter: false,
    //   filter: false,
    // },
  ];

  return (
    <>
    
      <CDataTable
        // items={state||userData}
        fields={fields}
        columnFilter
        itemsPerPageSelect
        loadingSlot
        responsive
        outlined
        itemsPerPage={10}
        hover
        sorter
        pagination
        tableFilter
      />
    
    </>
  );
};

export default UserTable;
