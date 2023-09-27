import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const ServiceContext = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  
  return (
    <ServiceContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node,
};
