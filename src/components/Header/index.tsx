import React from "react";

import { HeaderProps } from "./types";
import styles from "./styles";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <h1 className="lheader__title">{title}</h1>

      <style jsx>{styles}</style>
    </div>
  );
};

export default Header;
