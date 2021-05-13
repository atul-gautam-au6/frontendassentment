import { lazy } from "react";

const  UserTable  = lazy(()=>import("./views/Users/Table"))


const routes = [
  { path: "/", exact: true, name: "Home" },  
  { path: "/user", exact: true, name: "Home",component:UserTable },
];

export default routes;
