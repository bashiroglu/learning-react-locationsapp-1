import React from 'react';
import ReactDOM from 'react-dom';

import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = ({ onClick, children, show }) => {
  const content = (
    <CSSTransition
      in={
        show
      } /* this is triger of displaying animation 
      basically we say when show become true, start transition */
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter /* this is CSSTransition says add */
      unmountOnExit /* this is CSSTransition says and remove */
    >
      {/* slide-in-left are classes in our css file manage the proses */}
      <aside className="side-drawer" onClick={onClick}>
        {/* by this we say
       when we click any part of our aside tag, just onClick */}
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
