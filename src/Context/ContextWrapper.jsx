import React from "react";
import AuthProvider from "./AuthProvider";
import CategoryProvider from "./CategoryProvider";

const ContextWrapper = ({ children, ...props }) => {
  return (
    <React.Fragment {...props}>
      <AuthProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </AuthProvider>
    </React.Fragment>
  );
};

export default ContextWrapper;
