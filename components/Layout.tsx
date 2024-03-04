import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ComboBox from "./Combobox";
import Form from "./Form";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <div className="pl-0 lg:pl-72">
          {/* <Form /> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
