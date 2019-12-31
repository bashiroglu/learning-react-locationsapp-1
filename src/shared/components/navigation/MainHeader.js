import React from 'react';

import './MainHeader.css';

const MainHeader = props => {/* main header take its children and style */
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
