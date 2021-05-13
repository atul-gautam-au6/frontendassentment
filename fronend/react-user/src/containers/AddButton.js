import { CButton } from "@coreui/react";
import React, { useEffect, useState } from "react";

const AddButton = (location) => {
  const action = location.location;

  const [path, setPath] = useState("");
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    switch (action) {
      default:
        setDisplay(true);
        break;
     
      case "/user":
        setPath("create_User");
        setValue("Add User");
        setDisplay(false);
        break;
    }
  }, [action, setDisplay, setValue]);
  return (
    <>
      {display ? (
        <></>
      ) : (
        <CButton to={path} color="primary">
          {value}
        </CButton>
      )}
    </>
  );
};

export default AddButton;
