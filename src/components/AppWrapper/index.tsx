import React from "react";

interface AppWrapperProps {
  children: any;
}

const AppWrapper = (props: AppWrapperProps) => {
  return props.children;
};

export default AppWrapper;
